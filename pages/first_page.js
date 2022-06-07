import { fetcher } from "../lib/fetcher";
import { TEST_QUERY_1 } from "../lib/wordpress/api"; // query method from api
import Link from "next/link"; // can send user to next link

/*
const first_page = ({allPosts}) =>{ // display
    const posts = allPosts;
    return(
        <div className="container">
            <main className="main">
                <div className="grid">
                    {posts.map((post)=>{
                        return(
                            <div className="card" key={post.slug}>
                                <h3>{post.title}</h3>
                                <div dangerouslySetInnerHTML={{__html:post.excerpt}}/>
                                <p>{post.date}</p>
                                <Link href={`/post/${post.slug}`}>
                                    <a>Read more</a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
*/

const first_page = ({allPosts}) =>{ // display
    const posts = allPosts;
    return(
        <div className="container">
            <main className="main">
                <div className="list space-y-4">
                    {posts.map((post)=>{
                        return(
                            <div className="list-item" key={post.slug}>
                                <h3 className="md:animate-bounce ">{post.title}</h3>
                                <div dangerouslySetInnerHTML={{__html:post.content}}/>
                                <p className="text-green-300">{post.date}</p>
                                <p className="text-blue-800  bg-gray-300">Status: {post.status}</p>
                                <Link href={`/post/${post.slug}`} >
                                    <a className="text-red-300 shadow-md">Read more</a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default first_page;

export async function getStaticProps(){ // 接收、抓取需要展示的信息
    const response = await fetcher(TEST_QUERY_1);
    //const allPosts = response.data.posts.edges.map(({ node }) => node);
    //const allPosts = response.data.posts.nodes;  //match the query // ALL_POSTS_SLUGS
    const allPosts = response.data.posts.nodes;

    return {
        props: {allPosts},
        revalidate: 1, // 可能同时有多人访问，为检查有没有新信息(from user)，每1秒刷新一次
    };
}