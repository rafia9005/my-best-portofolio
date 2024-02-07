import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterLayout() {
  return (
    <>
      <footer>
        <div className="lg:flex block justify-evenly lg:mx-0 mx-[20px] items-center">
          <motion.div whileInView={{ x: 0 }} animate={{ x: -100 }}>
            <h1 className="text-6xl w-1/1 font-bold">
              is there anything <br /> I can help you with.
            </h1>
          </motion.div>
          <motion.ul whileInView={{ x: 0 }} animate={{ x: 100 }} className="lg:block hidden ">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Experience</Link>
            </li>
            <li>
              <Link href="">Projects</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </motion.ul>
          <motion.ul whileInView={{ x: 0 }} animate={{ x: 100 }}  className="lg:block hidden ">
            <li>
              <Link href="">Instagram</Link>
            </li>
            <li>
              <Link href="">Twitter</Link>
            </li>
            <li>
              <Link href="">Tiktok</Link>
            </li>
            <li>
              <Link href="">Facebook</Link>
            </li>
            <li>
              <Link href="">Treads</Link>
            </li>
          </motion.ul>
        </div>
        <motion.div whileInView={{ y:0 }} animate={{ y:-50 }} className="flex lg:justify-center justify-end lg:mx-0 mx-[20px] items-center mt-3">
          <h1>&copy;2024 all reverd by rafii.site</h1>
        </motion.div>
      </footer>
    </>
  );
}
