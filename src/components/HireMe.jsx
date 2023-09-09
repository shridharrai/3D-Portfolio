import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="fixed left-4 bottom-4 lg:flex hidden justify-center items-center"
    >
      <div className="w-24 h-24 relative">
        <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin absolute inset-0"></div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex justify-center items-center absolute left-4 top-4 green-pink-gradient w-16 h-16 rounded-full"
          target="_blank"
        >
          <span className="text-white text-[14px] p-1 font-bold">Hire Me</span>
        </a>
      </div>
    </motion.div>
  );
};

export default HireMe;
