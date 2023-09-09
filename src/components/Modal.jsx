import React from "react";
import { motion } from "framer-motion";

const Modal = ({ title, message, buttonText, isError, setIsModalVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        className={`rounded-lg shadow-lg p-8 w-80 h-auto md:w-96 ${
          isError
            ? "bg-red-200 border-red-500"
            : "bg-green-200 border-green-500"
        }`}
      >
        <div className="text-center">
          <h2
            className={`text-2xl font-semibold ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {title}
          </h2>
          <p className="text-gray-600 mt-2">{message}</p>
        </div>

        <div className="text-center mt-6">
          <button
            className={`py-2 px-4 text-white rounded-full focus:outline-none ${
              isError
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={setIsModalVisible}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
