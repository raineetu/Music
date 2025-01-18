import { FaShieldAlt, FaUserSecret, FaCheckCircle } from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    title: "Security",
    icon: <FaShieldAlt className="text-8xl text-blue-500" />,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae mollitia quidem molestias nulla nostrum, perspiciatis earum atque illum quaerat corporis nam doloribus dolorem fugiat del",
  },
  {
    id: 2,
    title: "Privacy",
    icon: <FaUserSecret className="text-8xl text-green-500" />,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae mollitia quidem molestias nulla nostrum, perspiciatis earum atque illum quaerat corporis nam doloribus dolorem fugiat del",
  },
  {
    id: 3,
    title: "Reliability",
    icon: <FaCheckCircle className="text-8xl text-yellow-500" />,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae mollitia quidem molestias nulla nostrum, perspiciatis earum atque illum quaerat corporis nam doloribus dolorem fugiat del",
  },
];

function Service() {
  return (
    <div className="bg-gray-200 py-4 font-poppins">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center h-full py-4">
          <h1 className="text-2xl md:text-4xl font-bold">Our Services</h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              {/* Render Icon */}
              <div className="mb-4 flex items-center justify-center ">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>

              {/* Description */}
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
