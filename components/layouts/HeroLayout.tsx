import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroLayout() {
  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className=""></div>
          <div
            className="blur-[106px] lg:h-[600px] w-[100px] h-[100px] lg:w-[600px] bg-gradient-to-r from-purple-500 to-black"
            style={{ borderRadius: "63% 37% 28% 72% / 58% 48% 52% 42% " }}
          ></div>
        </div>
      </motion.div>

      <div className="relative flex justify-between items-center h-screen text-black">
        <div className="lg:mx-[200px] mx-[10px]">
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:text-[200px] text-7xl font-bold noto"
          >
            Ahmad Rafi.
          </motion.h1>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-start items-center mt-[40px]"
          >
            <p className="lg:w-1/2">
              Ahmad Rafi adalah seorang <b>Full-Stack Developer</b> yang sangat
              terampil dan berpengalaman. Ia memiliki pemahaman mendalam tentang
              semua aspek pengembangan web
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-5"
          >
            <Link href="" className="rounded bg-black text-white px-3 py-2">
              Download CV
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
