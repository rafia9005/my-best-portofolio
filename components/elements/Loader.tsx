import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderComponent = (props: any) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="rounded-full"
            >
              <div>
                <h1 className="text-3xl font-bold">Ahmad <span className="bg-black text-white px-2 rounded-md">Rafi.</span></h1>
                <div className="w-full mt-2 h-[5px] bg-black rounded"></div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </main>
  );
};

export default LoaderComponent;