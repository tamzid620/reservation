import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationOutline } from "react-icons/io5";
import italyMap from "../../../../assets/Images/Map-Italy.jpg";
import franceMap from "../../../../assets/Images/Map-France.jpg";
import france1 from "../../../../assets/Images/france-tour/France.jpg";
import france2 from "../../../../assets/Images/france-tour/Lyon.jpg";
import france3 from "../../../../assets/Images/france-tour/Cannes.jpg";
import france4 from "../../../../assets/Images/france-tour/Paris.jpg";
import france5 from "../../../../assets/Images/france-tour/Marseille.jpg";
import france6 from "../../../../assets/Images/france-tour/Bordeaux.jpg";

const franceData = [
  {
    id: 1,
    area: "France",
    image: france1
  },
  {
    id: 2,
    area: "Lyon",
    image: france2
  },
  {
    id: 3,
    area: "Cannes",
    image: france3
  },
  {
    id: 4,
    area: "Paris",
    image: france4
  },
  {
    id: 5,
    area: "Marseille",
    image: france5
  },
  {
    id: 6,
    area: "Bordeaux",
    image: france6
  },
];

const TourCountries = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
      className="bg-white text-black py-32"
    >
      <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5">
        {/* = INFORMATION SECTION =-=================================================== */}
        {/* title section  */}
        <h1 className="tracking-[0.3em] text-[#3674B5] font-semibold uppercase mb-2">
          Most Popular
        </h1>
        <h2
          style={{ fontFamily: "Poppins, sans-serif " }}
          className="text-5xl uppercase font-bold"
        >
          Travel <span className="text-[#3674B5]">Countries</span>
        </h2>
        {/* <<<<<<<<<<<<<<<<<<<< INFORMATION SECTION  >>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="mt-10">
          <section className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-10 items-center">
            {/* text section   */}
            <div
              className="bg-cover bg-center p-8 w-full h-full flex items-center"
              style={{
                backgroundImage: `url(${franceMap})`,
                fontFamily: "Poppins, sans-serif",
              }}
            >
            <div>
              <h1
                style={{ fontFamily: "Poppins, sans-serif " }}
                className="text-3xl uppercase font-bold"
              >
                France, Europe
              </h1>
              <p className="my-4 text-gray-500">
                We provide you with interesting and exciting tours to different
                parts of the world. Orci varius natoque penatibus et magnis
                disney turien nascete ridiculus duru in the mus nellen.
              </p>
              <div className="grid grid-cols-3 gap-4 text-gray-500">
                {franceData.map((france) => (
                  <div key={france.id}>
                    <p className="flex items-center gap-1 ">
                      <IoLocationOutline  color="#3674B5"/>
                      {france.area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </div>
            {/* slider section  */}
            <div>
            <Slider ref={sliderRef} {...settings}>
            {franceData.map(({ area, image }, index) => (
              <div
                key={index}
                className=" relative overflow-hidden shadow-lg group "
              >
                <img
                  src={image}
                  alt={location}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105 bg-black mx-4"
                />
                <div className="bg-black opacity-0 group-hover:opacity-20 absolute inset-0 z-0 " />
               
                <div className="absolute bottom-5 left-5 text-white font-semibold  drop-shadow-md opacity-0 group-hover:opacity-100">
                  <p className="text-2xl flex items-center gap-1 ">
                    <IoLocationOutline />
                    {area}
                  </p>
                  <hr />
                </div>
              </div>
            ))}
          </Slider>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TourCountries;
