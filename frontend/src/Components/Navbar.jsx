import { MdMenuOpen } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-brandDark text-white font-verela">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="flex items-center justify-between container py-8"
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
          <div className="mx-8">
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 2,
                followSpeed: 1.5,
                scale: 5, // Makes the size 5 times bigger
                mixBlendMode: "difference", // Ensures white text becomes visible when overlapped by the circle
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
            <button className="text-xl ps-14">
              <FaHeadphones />
            </button>
          </UpdateFollower>
        </div>

        {/* Mobile Hamburger Section */}
        <div className="hidden md:block">
          <MdMenuOpen className="text-4xl" />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
