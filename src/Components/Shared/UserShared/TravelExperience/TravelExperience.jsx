import { useEffect, useRef } from "react";
import "./TravelExperience.css";
import sliderImage1 from "../../../../assets/Images/experience-image/1.jpg";
import sliderImage2 from "../../../../assets/Images/experience-image/2.jpg";
import sliderImage3 from "../../../../assets/Images/experience-image/3.jpg";
import sliderImage4 from "../../../../assets/Images/experience-image/4.jpg";
import sliderImage5 from "../../../../assets/Images/experience-image/5.jpg";
import sliderImage6 from "../../../../assets/Images/experience-image/6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    path: "",
    image: sliderImage1,
    genre: "Tours",
    title: "Family Adventure Tours for Teens & Kids",
    tours: "06 Aug",
  },
  {
    path: "",
    image: sliderImage2,
    genre: "Tours",
    title: "Practical information for travelling to Namibia",
    tours: "06 Aug",
  },
  {
    path: "",
    image: sliderImage3,
    genre: "Travel",
    title: " things you can not miss in Miami",
    tours: "02 Aug",
  },
  {
    path: "",
    image: sliderImage4,
    genre: "Tours",
    title: "Small group tours with flights from the USA",
    tours: "04 Aug",
  },
  {
    path: "",
    image: sliderImage5,
    genre: "Travel",
    title: "Practical information for travelling to Egypt",
    tours: "03 Aug",
  },
  {
    path: "",
    image: sliderImage6,
    genre: "Destications",
    title: "Tips Towards a Flawless Honeymoon",
    tours: "02 Aug",
  },
];

const TravelExperience = () => {
  const sliderRef = useRef(null);

    useEffect(() => {
      const intervalId = setInterval(() => {
        sliderRef.current.slickNext();
      }, 2000);

      return () => clearInterval(intervalId);
    }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      className="bg-blue-950 text-black py-32"
    >
      <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5">
        {/* = INFORMATION SECTION =-=================================================== */}
        {/* title section  */}
        <h1 className="tracking-[0.3em] text-[#A1E3F9] font-semibold uppercase mb-2">
          TRAVEL BLOG
        </h1>
        <h2
          style={{ fontFamily: "Poppins, sans-serif " }}
          className="text-5xl uppercase font-bold"
        >
          <span className="text-white">Travel</span>
          <span className="text-[#A1E3F9]"> Experience</span>
        </h2>
        {/* <<<<<<<<<<<<<<<<<<<< slider section >>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="mt-8">
          <Slider ref={sliderRef} {...settings}>
            {sliderData.map(({ image, genre, title, tours }, index) => (
              <div key={index} className=" relative overflow-hidden group">
                  <img
                    src={image}
                    alt="tour experience images"
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105 bg-black mx-4"
                  />
                  <div className="bg-black opacity-0 group-hover:opacity-40 absolute inset-0 z-0 " />
                  <div className="absolute top-3 left-6 bg-[#578FCA] text-white px-3 py-1 rounded-md font-semibold text-sm">
                    {tours}
                  </div>
                <div className="absolute bottom-5 left-10 bg-white drop-shadow-md w-[320px] h-[150px] p-6 opacity-0 group-hover:opacity-100">
                  <h1
                    style={{ fontFamily: "Poppins, sans-serif " }}
                    className="text-xl font-light text-[#578FCA]"
                  >
                    {genre}
                  </h1>
                  <p className="mt-2 font-semibold text-xl">{title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
