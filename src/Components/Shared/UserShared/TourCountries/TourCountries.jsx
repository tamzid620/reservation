import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import italyMap from "../../../../assets/Images/Map-Italy.jpg";
import franceMap from "../../../../assets/Images/Map-France.jpg";
import france1 from "../../../../assets/Images/france-tour/France.jpg";
import france2 from "../../../../assets/Images/france-tour/Lyon.jpg";
import france3 from "../../../../assets/Images/france-tour/Cannes.jpg";
import france4 from "../../../../assets/Images/france-tour/Paris.jpg";
import france5 from "../../../../assets/Images/france-tour/Marseille.jpg";
import france6 from "../../../../assets/Images/france-tour/Bordeaux.jpg";
import italy1 from "../../../../assets/Images/italy-tour/Roma.jpg";
import italy2 from "../../../../assets/Images/italy-tour/Italy.jpg";
import italy3 from "../../../../assets/Images/italy-tour/Venice.jpg";
import italy4 from "../../../../assets/Images/italy-tour/Milano.jpg";
import italy5 from "../../../../assets/Images/italy-tour/Perugia.jpg";
import italy6 from "../../../../assets/Images/italy-tour/Parma.jpg";

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
const italyData = [
  {
    id: 1,
    area: "Roma",
    image: italy1
  },
  {
    id: 2,
    area: "Italy",
    image: italy2
  },
  {
    id: 3,
    area: "Venice",
    image: italy3
  },
  {
    id: 4,
    area: "Milano",
    image: italy4
  },
  {
    id: 5,
    area: "Perugia",
    image: italy5
  },
  {
    id: 6,
    area: "Parma",
    image: italy6
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
              slidesToShow: 1,
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
        <div >
          <section className=" grid  md:grid-cols-2 sm: grid-cols-1 gap-10 items-center mt-10">
            {/* text section   */}
            <div
              className="bg-contain bg-no-repeat bg-center p-8 w-full h-full flex items-center"
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
              <div className="flex justify-end mt-20">
              <button className="flex items-center gap-1 bg-[#3674B5] hover:bg-[#578FCA] text-white rounded-sm shadow-black shadow-md px-3 py-2">All Tours <IoIosArrowRoundForward size={20}/></button>
              </div>
            </div>
            </div>
            {/* slider section  */}
            <div>
            <Slider ref={sliderRef} {...settings}>
            {franceData.map(({ area, image }, index) => (
              <div
                key={index}
                className=" relative overflow-hidden group "
              >
                <img
                  src={image}
                  alt={location}
                  className=" w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105 bg-black mx-4"
                />
                <div className="bg-black opacity-0 group-hover:opacity-20 absolute inset-0 z-0 " />
               
                <div className="absolute bottom-5 left-5 text-white font-semibold  drop-shadow-md ">
                  <p className="text-2xl flex items-center gap-1 pb-2">
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
          <section className="grid  md:grid-cols-2 sm: grid-cols-1 gap-10 items-center mt-32">
            {/* slider section  */}
            <div className="">
            <Slider ref={sliderRef} {...settings}>
            {italyData.map(({ area, image }, index) => (
              <div
                key={index}
                className=" relative overflow-hidden group "
              >
                <img
                  src={image}
                  alt={location}
                  className=" w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105 bg-black mx-4"
                />
                <div className="bg-black opacity-0 group-hover:opacity-20 absolute inset-0 z-0 " />
               
                <div className="absolute bottom-5 left-5 text-white font-semibold  drop-shadow-md ">
                  <p className="text-2xl flex items-center gap-1 pb-2">
                    <IoLocationOutline />
                    {area}
                  </p>
                  <hr />
                </div>
              </div>
            ))}
          </Slider>
            </div>
            {/* text section   */}
            <div
              className="bg-contain bg-no-repeat bg-center p-8 w-full h-full flex items-center"
              style={{
                backgroundImage: `url(${italyMap})`,
                fontFamily: "Poppins, sans-serif",
              }}
            >
            <div>
              <h1
                style={{ fontFamily: "Poppins, sans-serif " }}
                className="text-3xl uppercase font-bold"
              >
                Italy, Europe
              </h1>
              <p className="my-4 text-gray-500">
                We provide you with interesting and exciting tours to different
                parts of the world. Orci varius natoque penatibus et magnis
                disney turien nascete ridiculus duru in the mus nellen.
              </p>
              <div className="grid grid-cols-3 gap-4 text-gray-500">
                {italyData.map((italy) => (
                  <div key={italy.id}>
                    <p className="flex items-center gap-1 ">
                      <IoLocationOutline  color="#3674B5"/>
                      {italy.area}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-20">
              <button className="flex items-center gap-1 bg-[#3674B5] hover:bg-[#578FCA] text-white rounded-sm shadow-black shadow-md px-3 py-2">All Tours <IoIosArrowRoundForward size={20}/></button>
              </div>
            </div>
            </div>   
          </section>
        </div>
      </div>
    </div>
  );
};

export default TourCountries;
