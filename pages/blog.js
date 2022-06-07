import React from "react";
import { fetcher } from "../lib/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
import Link from "next/link";

const blog = ({ allPosts }) => {
  return (
    <div className="container">
      <main className="main">
        <div className="grid">
          {allPosts?.map((post) => (
            <div key={post.slug} className="card">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href={`/post/${post.slug}`}>
                <a>Read more</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetcher(ALL_POSTS);
  console.log(response);
  const allPosts = response.data.posts.edges.map(({ node }) => node);

  console.log(allPosts);

  return {
    props: {
      allPosts,
    },
    revalidate: 1,
  };
};
export default blog;
