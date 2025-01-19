import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const items = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Categories", link: "#" },
  { id: 3, title: "Blog", link: "#" },
  { id: 4, title: "About", link: "#" },
  { id: 5, title: "Contact", link: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-brandDark text-white font-verela relative">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className={`container py-8 ${
          isMenuOpen ? "hidden md:flex" : "flex"
        } items-center justify-between`}
      >
        {/* Logo Section */}
        <div>
          <a href="# ">
            <h1 className="font-mono font-semibold text-xl uppercase">
              Playing /{" "}
              <span className="text-green-400 font-extralight">Market</span>
            </h1>
          </a>
        </div>

        {/* Menu Section */}
        <div className="flex">
          <div className="mx-8 hidden md:flex">
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 2,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <ul className="flex gap-8">
                {items.map((navbar) => (
                  <li key={navbar.id}>
                    <a href={navbar.link} className="text-sm px-4 uppercase">
                      {navbar.title}
                    </a>
                  </li>
                ))}
              </ul>
            </UpdateFollower>
          </div>
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 2,
              followSpeed: 1.5,
              scale: 5,
              mixBlendMode: "difference",
            }}
          >
            <button className="text-xl hidden md:block ps-14">
              <FaHeadphones />
            </button>
          </UpdateFollower>
        </div>

        {/* Mobile Hamburger Section */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-4xl">
            <MdMenuOpen />
          </button>
        </div>
      </motion.nav>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full h-screen bg-brandDark text-white flex flex-col items-center justify-center z-50"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-4xl"
          >
            ✖
          </button>
          <ul className="flex flex-col items-center space-y-8">
            {items.map((navbar) => (
              <li key={navbar.id}>
                <a href={navbar.link} className="text-lg uppercase">
                  {navbar.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
