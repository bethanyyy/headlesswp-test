import React from "react";

const ProductsCard = ({ product }) => {
  const { name, shortDescription, image, price } = product.node;

  return (
    <div>
      <img src={image.sourceUrl} alt="" />
      <p>{name}</p>
      <p>{shortDescription}</p>
      <p>{price ? price : "Free!"}</p>
    </div>
  );
};

export default ProductsCard;
