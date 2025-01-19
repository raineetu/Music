import { FaHeadphones, FaCheckCircle } from "react-icons/fa";

function Banner() {
  return (
    <div className="w-full h-auto bg-gray-50 py-8">
      <div className="flex flex-col lg:flex-row justify-center items-center container  px-6 lg:px-16 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/05/68/86/76/360_F_568867614_1fqZVYONX1GDUql7ZCWj98LVsOPaKOkk.jpg"
            alt="Stylish headphones in aesthetic design"
            className="rounded-lg shadow-lg w-full lg:w-4/5"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <FaHeadphones className="text-blue-500" />
            Stylish Headphones
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            atque similique nemo ipsa exercitationem pariatur beatae magni vel
            ex adipisci. Minima molestias nobis, deleniti excepturi praesentium
            iure eaque reprehenderit architecto!
          </p>
          <ul className="text-gray-700 text-lg space-y-3">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Crystal-clear sound quality
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Comfortable and lightweight design
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Perfect for music lovers and gamers
            </li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
