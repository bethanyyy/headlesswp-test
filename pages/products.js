import React from "react";
import { fetcher } from "../lib/fetcher";
import { FIRST_FIVE_PRODUCTS } from "../lib/wordpress/api";
import ProductsCard from "../components/ProductsCard";

const products = ({ products }) => {
  return (
    <div>
      <h3 className="bg-pink-200 p-2 text-xl text-center uppercase">
        First Five Products
      </h3>
      <div className="bg-gray-200 py-2 grid grid-cols-3 gap-10">
        {products?.map((product) => (
          <ProductsCard key={product.node.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetcher(FIRST_FIVE_PRODUCTS);
  const products = response.data.products.edges || [];

  console.log(products);

  return {
    props: { products },
  };
};

export default products;
