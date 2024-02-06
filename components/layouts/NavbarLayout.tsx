import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavbarLayout() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className="fixed w-[100%] backdrop-blur-lg bg-opacity-30"
      style={{ zIndex: "2" }}
    >
      <div className="mx-auto">
        <div className="flex mx-auto justify-between w-5/6 ">
          <div className="flex items-center gap-16 my-5">
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-[20px]"
            >
              <span className="text-3xl font-bold">r code.</span>
            </motion.div>
            <div className="hidden lg:flex gap-8 ">
              <motion.a
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ duration: 0.6 }}
                href="#"
                className="rounded-full hover:bg-gray-100 px-4 py-2"
              >
                Home
              </motion.a>
              <motion.a
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ duration: 0.7 }}
                href="#"
                className="rounded-full hover:bg-gray-100 px-4 py-2"
              >
                About
              </motion.a>
              <motion.a
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ duration: 0.8 }}
                href="#"
                className="rounded-full hover:bg-gray-100 px-4 py-2"
              >
                Experience
              </motion.a>
              <motion.a
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ duration: 0.9 }}
                href="#"
                className="rounded-full hover:bg-gray-100 px-4 py-2"
              >
                Projects
              </motion.a>
              <motion.a
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ duration: 1 }}
                href="#"
                className="rounded-full hover:bg-gray-100 px-4 py-2"
              >
                Contact
              </motion.a>
            </div>
          </div>
          <div className="flex gap-6">
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 1.1 }}
              className="flex items-center gap-10"
            >
              {/* buatkan dark mode button */}
              <div className="hidden md:flex">
                <Link href="/github" className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-900 hover:text-white">
                  Github
                </Link>
              </div>
            </motion.div>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-[320px]"
        }`}
      >
        <div className="w-[90%] mt-5 h-[110%] mx-[5%] relative backdrop-filter bg-black backdrop-blur-lg bg-opacity-60 py-5 border border-white rounded-md">
          <div className="mx-8 flex flex-col gap-8 font-bold tracking-wider">
            <a href="#" className="">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Jobs</a>
            <a href="#">Category</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
