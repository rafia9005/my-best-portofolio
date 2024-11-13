import React from "react";
import { motion } from "framer-motion";
export default function ExprerienceLayout() {
  return (
    <>
      <div className="lg:flex block justify-center items-center mt-5">
        <div>
          <motion.h1
            whileInView={{ x: 0 }}
            animate={{ x: -100 }}
            className="lg:text-6xl lg:mx-0 mx-5 text-5xl font-bold"
          >
            Experience.
          </motion.h1>
          <motion.div
            whileInView={{ x: 0 }}
            animate={{ x: -100 }}
            className="w-[300px] h-2 bg-black lg:mx-0 mx-5 rounded"
          ></motion.div>
          <div className="mt-[50px]">
            <div className="lg:flex block lg:mx-0 mx-[10px] justify-center items-center gap-[200px]">
              <div className="p-3 rounded">
                <motion.div
                  whileInView={{ y: 0 }}
                  animate={{ y: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black w-[230px] p-2 rounded-md flex justify-center items-center"
                >
                  <img src="./ryana.png" />
                </motion.div>
              </div>
              <motion.div
                whileInView={{ y: 0 }}
                animate={{ y: -100 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded"
              >
                <div className="bg-gray-100 w-[200px] p-2 rounded-md flex justify-center items-center">
                  <img src="./free.png" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
