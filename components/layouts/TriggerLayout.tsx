import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function TriggerLayout() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1.5], ["1%", "-200%"]);
  return (
    <>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="flex px-[100px] px-[200px] sticky top-0 h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div>
              <h1 className="text-9xl font-bold">1 Year Experience.</h1>
              <h1 className="text-5xl mt-5">coding is an art?</h1>
            </div>
          </motion.div>
          <motion.div style={{ x }} className="flex justify-evenly items-center">
            <div>
              <h1 className="text-9xl font-bold noto">Ahmad Rafi.</h1>
              <h1 className="text-5xl mt-5">Full-StackDeveloper</h1>
            </div>
          </motion.div>
          <div className="rotate-[270deg] text-4xl"><h1>MY PORTOFOLIO.</h1></div>
        </div>
      </section>
    </>
  );
}
