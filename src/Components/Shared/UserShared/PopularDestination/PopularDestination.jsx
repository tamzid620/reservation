import { useRef } from "react";
import "./PopularDestination.css";
import sliderImage1 from "../../../../assets/Images/Slider-Italy.jpg";
import sliderImage2 from "../../../../assets/Images/Slider-Japan.jpg";
import sliderImage3 from "../../../../assets/Images/Slider-Mexico.jpg";
import sliderImage4 from "../../../../assets/Images/Slider-Dubai.jpg";
import sliderImage5 from "../../../../assets/Images/Slider-Greece.jpg";
import sliderImage6 from "../../../../assets/Images/Slider-France.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    path: "",
    image: sliderImage1,
    location: "Italy",
    packages: "6 Tour Packages",
    tours: "6 Tours",
  },
  {
    path: "",
    image: sliderImage2,
    location: "Japan",
    packages: "6 Tour Packages",
    tours: "6 Tours",
  },
  {
    path: "",
    image: sliderImage3,
    location: "Mexico",
    packages: "2 Tour Packages",
    tours: "2 Tours",
  },
  {
    path: "",
    image: sliderImage4,
    location: "Dubai",
    packages: "4 Tour Packages",
    tours: "4 Tours",
  },
  {
    path: "",
    image: sliderImage5,
    location: "Greece",
    packages: "3 Tour Packages",
    tours: "3 Tours",
  },
  {
    path: "",
    image: sliderImage6,
    location: "France",
    packages: "2 Tour Packages",
    tours: "2 Tours",
  },
];

const PopularDestination = () => {
  const sliderRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       sliderRef.current.slickNext();
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif " }}
      className="bg-gray-200 text-black py-32"
    >
      <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5">
        {/* = INFORMATION SECTION =-=================================================== */}
        {/* title section  */}
        <h1 className="tracking-[0.3em] text-[#3674B5] font-semibold uppercase mb-2">
          TOP DESTINATION
        </h1>
        <h2
          style={{ fontFamily: "Poppins, sans-serif " }}
          className="text-5xl uppercase font-bold"
        >
          Popular <span className="text-[#3674B5]">Destination</span>
        </h2>
        {/* <<<<<<<<<<<<<<<<<<<< slider section >>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="mt-8">
          <Slider ref={sliderRef} {...settings}>
            {sliderData.map(({ image, location, packages, tours }, index) => (
              <div
                key={index}
                className=" relative overflow-hidden shadow-lg group "
              >
                <img
                  src={image}
                  alt={location}
                  className="w-full h-[500px] transition-transform duration-500 group-hover:scale-105 bg-black mx-4"
                />
                <div className="bg-black opacity-0 group-hover:opacity-20 absolute inset-0 z-0 " />
                <div className="absolute top-3 right-3 bg-[#578FCA] text-white px-3 py-1 rounded-md font-semibold text-sm">
                  {tours}
                </div>
                <div className="absolute bottom-12 left-5 text-white font-semibold  drop-shadow-md opacity-0 group-hover:opacity-100">
                  <p className="text-2xl flex items-center gap-1 ">
                    <IoLocationOutline />
                    {location}
                  </p>
                  <hr />
                </div>
                  <div className="w-full absolute bottom-3 left-6 flex justify-between text-lg mt-2 text-white font-semibold  drop-shadow-md opacity-0 group-hover:opacity-100">
                    <p className="">{packages}</p>
                    <p className="flex items-center me-10 hover:text-[#56a5fa]">Explore <IoIosArrowRoundForward /></p>
                  </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
