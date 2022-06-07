import { fetcher } from "../lib/fetcher";
import { PRODUCT_QUERY } from "../lib/wordpress/api"; // query method from api
import Link from "next/link"; // can send user to next link


const second_page = ({allProducts}) =>{ // display
    const products = allProducts;
    return(
        <div className="container bg-slate-800">
            <div className="p-8 text-center">
                <h1 className="text-white text-5xl font-bold">Here is the Title</h1>
                <h2 className="text-slate-200 text-2xl italic">...and some description</h2>
            </div>
            <main className="main">
            
                <div className="grid">
                    {products.map((product)=>{
                        return(
                            <div className="p-5 w-full md:w-1/3" key={product.slug}>
                                <img className="rounded-lg hover:scale-125 overflow-hidden" src={product.image.sourceUrl} alt=""/>
                                <p className="text-blue-300 text-xs ">{product.type}</p>
                                <h3 className="hover:text-white text-blue-200">{product.name}</h3>
                                <div className="text-blue-800 bg-gray-300" dangerouslySetInnerHTML={{__html:product.description}}/>
                                <p className="text-blue-300">Rate: {product.averageRating}</p>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default second_page;

export async function getStaticProps(){
    const response = await fetcher(PRODUCT_QUERY);
    const allProducts = response.data.products.nodes;

    return {
        props: {allProducts},
        revalidate: 1, 
    };
}