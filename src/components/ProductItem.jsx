import React from "react";

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="border border-gray-300 m-4 p-4 text-left">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-auto cursor-pointer"
        onClick={() => setStateModal(item)}
      />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.price} $</p>
        <button
          onClick={() => setStateModal(item)}
          className="mt-2 px-4 py-2 bg-black text-white hover:bg-gray-800 flex items-center justify-center"
        >
          Add to cart <i className="fa-solid fa-cart-plus ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
