import React from "react";

const Modal = ({ content, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 border border-gray-300 shadow-lg max-w-md w-full h-5/6 overflow-y-auto">
        <h2 className="text-xl font-bold">{content.name}</h2>
        <p className="text-gray-600 mb-2">
          <strong>Price:</strong> {content.price} $
        </p>
        <p className="text-gray-600 mb-2">
          <strong>ID:</strong> {content.id}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Alias:</strong> {content.alias}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Quantity:</strong> {content.quantity}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Short Description:</strong> {content.shortDescription}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Description:</strong> {content.description}
        </p>
        <img
          src={content.image}
          alt={content.name}
          className="w-full h-auto my-4"
        />
        <button
          onClick={closeModal}
          className="mt-2 px-4 py-2 bg-black text-white hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
