import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

// Static Headphone Data
const headphonedta = [
  {
    id: 1,
    image: "/head1.png",
    title: "Headphone Wireless",
    price: "Rs 1245",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet fugit quibusdam.",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: "/head2.png",
    title: "Headphone Wired",
    price: "Rs 1245",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet fugit quibusdam.",
    modal: "Modal Blue",
    bgColor: "#4f42b5",
  },
  {
    id: 3,
    image: "/head3.png",
    title: "Gaming Headphones",
    price: "Rs 1545",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet fugit quibusdam.",
    modal: "Modal Green",
    bgColor: "#0D98BA",
  },
];

const fadeup = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5, // Starts smaller and below the final position
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1, // Final state at normal size
      transition: {
        delay, // Customizable delay
        duration: 0.8, // Duration of the animation
        ease: "easeOut", // Smooth easing
      },
    },
    exit: {
      opacity: 0,
      y: 50, // Moves upward as it exits
      scale: 0.8, // Shrinks slightly on exit
      transition: {
        duration: 0.5, // Exit animation duration
        ease: "easeIn", // Smooth easing for exit
      },
    },
  };
};

// Main Hero Component
function Hero() {
  // State for active headphone
  const [activeData, setActiveData] = useState(headphonedta[0]);

  //handle click to update active headphone
  const handleClick = (data) => {
    setActiveData(data);
  };

  return (
    <section className="bg-brandDark text-white font-poppins">
      <div className="container min-h-[600px] grid grid-cols-1 sm:grid-cols-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          {/* Headphone Details */}
          <div className="w-full sm:w-[500px] text-center sm:text-left sm:mt-6">
            <div className="mb-4">
              <AnimatePresence>
                {/* Title and Description Section with UpdateFollower */}
                <motion.h1
                  className="text-2xl font-bold md:text-5xl"
                  variants={fadeup(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 99,
                      followSpeed: 0.5,
                      rotate: -720,
                      mixBlendMode: "difference",
                      scale: 8,
                    }}
                  >
                    {activeData.title}
                  </UpdateFollower>
                </motion.h1>
                <motion.div
                  variants={fadeup(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <p className="mt-4">{activeData.description}</p>
                </motion.div>

                {/* Image Section for Button with UpdateFollower */}

                {/* Button with UpdateFollower */}
                <motion.button
                  className="py-2 mt-4 px-4 rounded-[4px] shadow-sm shadow-white"
                  style={{ backgroundColor: activeData.bgColor }}
                  variants={fadeup(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "whitesmoke",
                      zIndex: 99,
                      followSpeed: 0.5,
                      rotate: -720,
                      scale: 6,
                      backgroundElement: (
                        <div>
                          <img src={activeData.image} alt={activeData.title} />
                        </div>
                      ),
                    }}
                  >
                    Buy and listen
                  </UpdateFollower>
                </motion.button>
              </AnimatePresence>

              {/* Image Section for Small Devices */}
              <div className="w-full h-[50vh] mt-6 sm:hidden">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Top Headphones for You */}
              <motion.div
                className="my-8 flex items-center justify-center sm:justify-start"
                variants={fadeup(0.6)}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <div className="w-20 h-[2px] bg-white"></div>
                <p className="uppercase px-4">Top headphones for you</p>
                <div className="w-20 h-[2px] bg-white"></div>
              </motion.div>

              {/* Headphone List */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-7">
                {headphonedta.map((data) => (
                  <motion.div
                    key={data.id}
                    className="grid grid-cols-2 gap-x-4 place-items-center cursor-pointer"
                    onClick={() => handleClick(data)}
                    variants={fadeup(0.8)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <div className="justify-center items-center">
                      <img
                        src={data.image}
                        alt={data.title}
                        onError={(e) => (e.target.src = "/fallback.png")}
                        className="w-35 sm:w-35 h-35 sm:38 object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold pb-2">{data.price}</p>
                      <p className="text-sm">{data.modal}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section for Larger Devices */}
          <div className="w-[60vh] h-[75vh] hidden sm:block">
            <img
              src={activeData.image}
              alt={activeData.title}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="text-2xl sm:text-3xl bottom-12 fixed right-10 hover:rotate-[360deg] duration-500 z-50 mix-blend-difference">
        <a href="">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default Hero;
