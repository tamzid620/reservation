import React from "react";
import "./PopularTours.css";
import tourImage1 from "../../../../assets/Images/tour-Maldives.jpg";
import tourImage2 from "../../../../assets/Images/tour-Rome.jpg";
import tourImage3 from "../../../../assets/Images/tour-Greece.jpg";
import tourImage4 from "../../../../assets/Images/tour-Canada.jpg";
import tourImage5 from "../../../../assets/Images/tour-Turkey.jpg";
import tourImage6 from "../../../../assets/Images/tour-Amazon.jpg";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";


const imageData = [
  {
    path: "",
    image: tourImage1,
    title: "Maldives Tour",
    duration: "12 days",
    person: "8+",
    location: "Maldives",
    price: "1300$",
  },
  {
    path: "",
    image: tourImage2,
    title: "Rome Tour",
    duration: "6 days",
    person: "10+",
    location: "Rome",
    price: "1600$",
  },
  {
    path: "",
    image: tourImage3,
    title: "Greece Tour",
    duration: "10 days",
    person: "12+",
    location: "Greece",
    price: "2000$",
  },
  {
    path: "",
    image: tourImage4,
    title: "Canada Tour",
    duration: "7 days",
    person: "16+",
    location: "Canada",
    price: "2600$",
  },
  {
    path: "",
    image: tourImage5,
    title: "Turkey Tour",
    duration: "10 days",
    person: "2+",
    location: "Turkey",
    price: "300$",
  },
  {
    path: "",
    image: tourImage6,
    title: "Amazon Tour",
    duration: "10 days",
    person: "3+",
    location: "Amazon",
    price: "400$",
  },
];

const PopularTours = () => {
  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif " }}
      className="bg-gray-200 py-20"
    >
      <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5">
        {/* = INFORMATION SECTION =-=================================================== */}
        {/* title section  */}
        <h1 className="tracking-[0.3em] text-[#3674B5] font-semibold uppercase mb-2">
          Choose your place
        </h1>
        <h2
          style={{ fontFamily: "Poppins, sans-serif " }}
          className="text-5xl uppercase font-bold"
        >
          Popular <span className="text-[#3674B5]">Tours</span>
        </h2>
        {/* <<<<<<<<<<<<<<<<<<<< images section >>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
          {imageData.map((tour, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg group ${
                index === 0 ? "md:col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-black"
              />
              <div className="bg-black opacity-30 absolute inset-0 z-0 " />
              <div className="absolute top-3 right-3 bg-[#578FCA] text-white px-3 py-1 rounded-md font-semibold text-sm">
                {tour.price}
              </div>
              <div className="absolute bottom-3 left-3 text-white font-semibold drop-shadow-md">
                <p className="text-xl">{tour.title}</p>
                <hr />
                <div className="flex gap-3 text-lg mt-2">
                  <p className="flex items-center gap-1"><FaRegClock />{tour.duration}</p>
                  <p className="flex items-center gap-1"><GoPerson />{tour.person}</p>
                  <p className="flex items-center gap-1"><IoLocationOutline />{tour.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
