import React from "react";
import { fetcher } from "../../lib/fetcher";
import { PRODUCT_QUERY, GET_ONE_PRODUCT } from "../../lib/wordpress/api"; // query method from api


export const getStaticPaths = async () => {
    const res = await fetcher(PRODUCT_QUERY);
    //const allProducts = response.data.products.nodes;
    //const res = await fetch('http://nekonumatest.com/graphql');
    const data = await res.data.products.nodes;

    const paths = data.map((product) =>({
        params: {products: product.slug}, // products <- 与文件名保持一致
    }))
    
    return {
        paths,
        fallback:false
    }
}

/*
export async function getStaticProps(param){
    const slug = param.slug;

    const response = await fetcher( GET_ONE_PRODUCT ,{
            variables:{
                theSlug: slug
            }
        }
    );
    const allProducts = response.data.products.nodes;

    return {
        props: {allProducts},
        revalidate: 1, 
    };
}
*/

export const getStaticProps = async ({ params: { slug } }) => {
    
    const variables = {
        //id: slug,
        id:"dummy-product-02",
        idType: "SLUG",
    };
    const response = await fetcher(GET_ONE_PRODUCT, {variables});
    const productDetail = response.data.product;    
    return {
      props: { productDetail },
    };
}

const Details = ({ productDetail }) => {
    //console.log("product:",productDetail)
    //console.log("slug",theSlug);
    return (
        <div>
            <img src={productDetail.image.sourceUrl} alt=""/>
            <p>{productDetail.name}</p>
            <p>{productDetail.price}</p>
            <p>{productDetail.status}</p>
        </div>
    );
}

export default Details;