import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function TechStackLayout() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1.5], ["1%", "155%"]);
  return (
    <>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="flex px-[200px] gap-[50px] sticky top-0 h-screen justify-start items-center overflow-hidden">
          <motion.div style={{ x }} className="block">
            <img src="profile.jpg" alt="" className="rounded-md"/>
          </motion.div>
          <motion.div style={{ x }} className="block">
            <div>
              <h1 className="text-[120px] font-bold">Tech Stack.</h1>
              <div className="flex items-center gap-[10px] mt-5">
                <img src="ts.png" alt="" className="w-[100px]" />
                <img src="next.png" alt="" className="w-[100px]" />
                <img src="tailwind.png" alt="" className="w-[100px]" />
                <img src="react.png" alt="" className="w-[100px]" />
                <img src="vue.png" alt="" className="w-[100px]" />
              </div>
              <div className="flex items-center gap-[10px] mt-5">
                <img src="laravel.png" alt="" className="w-[100px]" />
                <img src="express.png" alt="" className="w-[100px]" />
                <img src="prisma.png" alt="" className="w-[100px]" />
                <img src="postgre.png" alt="" className="w-[100px]" />
                <img src="aws.png" alt="" className="w-[100px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
