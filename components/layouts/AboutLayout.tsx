import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutLayout() {
  return (
    <>
    
      <div className="lg:flex block justify-evenly items-center h-[90vh] text-black">
        <motion.div
          whileHover={{ rotate: 10 }}
          whileInView={{ x: 0 }}
          animate={{ x: -200 }}
          className="flex justify-center items-center"
        >
          <img src="./profile.jpg" className="lg:w-[400px] w-[300px] rounded-md" alt="" />
        </motion.div>
        <div className="">
          <div className="lg:w-[100%] lg:mx-[0] lg:mt-0 mt-5 mx-[5%] w-[90%]">
            <motion.h1
              whileInView={{ x: 0, scale: 1 }}
              animate={{ x: 100, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:text-6xl text-4xl font-bold"
            >
              Ahmad Rafi.
            </motion.h1>
            <motion.p
              whileInView={{ x: 0, scale: 1 }}
              animate={{ x: 100, scale: 0 }}
              transition={{ duration: 0.4 }}
              className="text-md"
            >
              Founder job.com
            </motion.p>
            <motion.p
              whileInView={{ y: 0, opacity: 1 }}
              animate={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-5"
            >
              Dengan mesin pencari canggih, Anda dapat menemukan pekerjaan yang
              <br className="lg:block hidden" />
              relevan dengan cepat dan mudah, berdasarkan kata kunci, lokasi,
              dan
              <br className="lg:block hidden" />
              preferensi Anda. Hasil pencarian juga dapat difilter berdasarkan
              <br className="lg:block hidden" />
              jenis pekerjaan, industri, perusahaan, dan gaji, memastikan Anda
              <br className="lg:block hidden" />
              hanya melihat pekerjaan yang paling sesuai dengan kebutuhan Anda.
            </motion.p>
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              animate={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ rotate: 1}}
              className="mt-5"
            >
              <Link href="" className="bg-black text-white px-4 py-3 rounded">
                Download CV
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
