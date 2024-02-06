import React from "react";
import { motion } from "framer-motion";
export default function ContactLayout() {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen">
        <div>
          <motion.h1
            whileInView={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-6xl font-bold"
          >
            Business Contact.
          </motion.h1>
          <motion.div
            whileInView={{ y: -50 }}
            animate={{ y: 0 }}
            className="mt-5 text-3xl mt-5"
          >
            <h1>Email : rafia9005@gmail.com</h1>
            <h1 className="mt-5">Phone : 082143338737</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}
