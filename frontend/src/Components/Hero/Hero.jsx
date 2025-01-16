const headphonedta = [
  {
    id: 1,
    image: "/head1.png",
    title: "Headphone Wireless",
    price: "Rs 1245",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet fugit quibusdam .adipisicing elit. Reprehenderit amet fugit quibusdam .",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: "/head2.png",
    title: "Headphone Wired",
    price: "Rs 1245",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet fugit quibusdam .",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 3,
    image: "/head3.png",
    title: "Gaming Headphones",
    price: "Rs 1545",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet fugit quibusdam .",
    modal: "Modal Black",
    bgColor: "#5a5958",
  },
];

function Hero() {
  return (
    <>
      <section className="bg-brandDark text-white font-poppins">
        <div className="container min-h-[600px] grid grid-cols-1 sm:grid-cols-1">
          {headphonedta.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center mb-8"
            >
              {/* Headphone details */}
              <div className="w-full sm:w-[500px] text-center sm:text-left sm:mt-6">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold md:text-5xl">
                    {item.title}
                  </h1>
                  <p className="mt-4">{item.description}</p>
                  <button className="py-2 mt-4 bg-[#8b5958] px-4 rounded-[4px] shadow-sm shadow-white">
                    Buy and listen
                  </button>

                  {/* Top Headphones for You */}
                  <div className="my-8 flex items-center justify-center sm:justify-start">
                    <div className="w-20 h-[2px] bg-white"></div>
                    <p className="uppercase px-4">Top headphones for you</p>
                    <div className="w-20 h-[2px] bg-white"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-7">
                    {headphonedta.map((data) => (
                      <div
                        key={data.id}
                        className="grid grid-cols-2 gap-x-4 place-items-center cursor-pointer"
                      >
                        <div className=" justify-center items-center">
                          <img
                            src={data.image}
                            alt={data.title}
                            className="w-35 sm:w-35 h-35 sm:38 object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold pb-2">{data.price}</p>
                          <p className="text-sm">{data.modal}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image section */}
              <div className="w-[60vh] xl:w-[70vh] h-[75vh] ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
