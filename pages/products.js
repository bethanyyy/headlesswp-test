import React from "react";
import { fetcher } from "../lib/fetcher";
import { FIRST_FIVE_PRODUCTS } from "../lib/wordpress/api";
import ProductsCard from "../components/ProductsCard";

const products = ({ products }) => {
  return (
    <div>
      <h3>First Five Products</h3>
      <div>
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
