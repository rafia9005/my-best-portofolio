import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function TechStackLayout() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1.5], ["1%", "70%"]);
  return (
    <>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="flex lg:px-[200px] lg:gap-[50px] sticky top-0 h-screen justify-start items-center overflow-hidden">
          <motion.div style={{ x }} className="block">
            <img src="profile.jpg" alt="" className="lg:block hidden lg:w-[500px] rounded-md" />
          </motion.div>
          <motion.div style={{ x }} className="block">
            <div>
              <h1 className="lg:text-[120px] text-5xl font-bold">Tech Stack.</h1>
              <div className="flex items-center gap-[10px] mt-5">
                <img src="ts.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="next.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="tailwind.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="react.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="vue.png" alt="" className="lg:w-[100px] w-[50px]" />
              </div>
              <div className="flex items-center gap-[10px] mt-5">
                <img src="laravel.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="express.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="prisma.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="postgre.png" alt="" className="lg:w-[100px] w-[50px]" />
                <img src="aws.png" alt="" className="lg:w-[100px] w-[50px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
