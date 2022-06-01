import React from "react";

const ProductsCard = ({ product }) => {
  const { name, shortDescription, image, price, onSale } = product.node;

  return (
    <div className="bg-teal-200 border-4 border-orange-300 rounded-md overflow-hidden relative">
      <img src={image.sourceUrl} alt="" className="w-full h-40 object-cover" />
      <div className="p-2">
        <p className="font-bold">{name}</p>
        {/* <p>{shortDescription}</p> */}
        <p>{price ? price : "Free!"}</p>
      </div>
      {onSale && (
        <div className="bg-nekopink text-white font-bold rounded-full p-7 absolute top-0 ml-1 mt-1 h-11 w-11 uppercase flex items-center justify-center">
          Sale!
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
