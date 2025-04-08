import { useEffect, useState } from "react";
import "./Banner.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import bannerImage1 from "../../../../assets/Images/hawaii-beach-landscape-with-nature-coastline.jpg";
import bannerImage2 from "../../../../assets/Images/beautiful-nature-landscape-with-black-sandy-beach-ocean.jpg";
import bannerImage3 from "../../../../assets/Images/nature-landscape-with-black-sand-beach.jpg";
import searchIcon from "../../../../assets/Icons/magnifier.png";

const Banner = () => {
  const imgData = [bannerImage1, bannerImage2, bannerImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgData.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="-mt-[85px] relative">
        <div className=" w-full h-screen overflow-hidden">
          <img
            src={imgData[currentIndex]}
            alt="Banner"
            className={`w-full h-screen object-cover transition-opacity duration-600 ${
              fade ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
        <div className="bg-black opacity-40 absolute inset-0 z-0" />
        <div className="text-white  absolute mt-48 flex justify-center items-center text-center z-10 inset-0">
          <div>
            {/*  TITLE SECTION  **************************************************************** */}
            <div>
              <h2
                style={{ fontFamily: "Barlow, sans-serif " }}
                className="md:text-lg sm: text-sm uppercase md:tracking-[0.4em] sm: tracking-[0.2em] mb-5"
              >
                Let&apos;s Travel the World With Us
              </h2>
              <h1
                style={{ fontFamily: "Poppins, sans-serif " }}
                className="md:text-7xl sm: text-5xl font-bold uppercase"
              >
                Explore The World <br />
                With <span className="bannertext">SkyScape</span>
              </h1>
            </div>
            {/* TOUR SELECTION SECTION **************************************************************  */}
            <div className="md:block sm: hidden">
              <form
                style={{ fontFamily: "Barlow, sans-serif " }}
                className=" mt-5 backdrop-blur-2xl lg:px-5 py-5 flex items-center justify-center "
              >
                {/* Tour Type  */}
                <div>
                  <select className="selector" name="" id="">
                    <option selected value="">
                      Tour Type
                    </option>
                    <option value="">Air Rides</option>
                    <option value="">Beaches</option>
                    <option value="">Budget Friendly</option>
                    <option value="">Group Tours</option>
                    <option value="">Meals Included</option>
                    <option value="">Romantic</option>
                  </select>
                </div>
                {/* Tour Type  */}
                <div>
                  <select className="selector" name="" id="">
                    <option value="" selected>
                      Destination
                    </option>
                    <option value="">Canada</option>
                    <option value="">Ireland</option>
                    <option value="">Saudi Arabia</option>
                    <option value="">Maldives</option>
                    <option value="">Malaysia</option>
                    <option value="">Thailand</option>
                  </select>
                </div>
                {/*  Start Date */}
                <div className="relative bg-white date-div">
                  <label
                    htmlFor="start-date"
                    className="absolute text-black rounded-sm text-sm left-3 top-[-10px] bg-gray-100 shadow-md px-1 z-10"
                  >
                    Start Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="px-5 py-4  border bg-transparent text-black "
                  />
                </div>
                {/*  End Date */}
                <div className="relative bg-white date-div">
                  <label
                    htmlFor="end-date"
                    className="absolute text-black rounded-sm text-sm left-3 top-[-10px] bg-gray-100 shadow-md px-1 z-10"
                  >
                    End Date
                  </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className=" px-5 py-4  border bg-transparent text-black "
                  />
                </div>
                {/* find now button  */}
                <button
                  className="find-button flex items-center justify-center gap-2 lg:px-10 md:px-5 lg:py-[13px] md:py-[14px] bg-[#3674B5]
            hover:bg-[#20364d] z-10 "
                >
                  <img src={searchIcon} alt="search icon" className="w-8" />
                  <p className="">Find Now</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* small device tour selection div ----------------------------------------------------- */}
      <div className="md:hidden sm: flex items-center justify-center">
        <form
          style={{ fontFamily: "Barlow, sans-serif " }}
          className=" mt-5 backdrop-blur-2xl lg:px-5 py-5 "
        >
          {/* Tour Type  */}
          <div>
            <select className="small-selector" name="" id="">
              <option selected value="">
                Tour Type
              </option>
              <option value="">Air Rides</option>
              <option value="">Beaches</option>
              <option value="">Budget Friendly</option>
              <option value="">Group Tours</option>
              <option value="">Meals Included</option>
              <option value="">Romantic</option>
            </select>
          </div>
          {/* Tour Type  */}
          <div>
            <select className="small-selector" name="" id="">
              <option value="" selected>
                Destination
              </option>
              <option value="">Canada</option>
              <option value="">Ireland</option>
              <option value="">Saudi Arabia</option>
              <option value="">Maldives</option>
              <option value="">Malaysia</option>
              <option value="">Thailand</option>
            </select>
          </div>
          {/*  Start Date */}
          <div className="relative bg-white mb-5">
            <label
              htmlFor="start-date"
              className="absolute text-black rounded-sm text-sm left-3 top-[-10px] bg-gray-100 shadow-md px-1 z-10"
            >
              Start Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="px-5 py-4  border bg-transparent text-black "
            />
          </div>
          {/*  End Date */}
          <div className="relative bg-white">
            <label
              htmlFor="end-date"
              className="absolute text-black rounded-sm text-sm left-3 top-[-10px] bg-gray-100 shadow-md px-1 z-10"
            >
              End Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className=" px-5 py-4  border bg-transparent text-black "
            />
          </div>
          {/* find now button  */}
          <button className="w-full flex items-center justify-center gap-2 mt-5 px-10 py-2 bg-[#3674B5] hover:bg-[#20364d] text-white"
          >
            <img src={searchIcon} alt="search icon" className="w-8" />
            <p className="">Find Now</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
