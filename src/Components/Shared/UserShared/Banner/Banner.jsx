import { useEffect, useState } from "react";
import './Banner.css' ;
import bannerImage1 from "../../../../assets/Images/hawaii-beach-landscape-with-nature-coastline.jpg";
import bannerImage2 from "../../../../assets/Images/beautiful-nature-landscape-with-black-sandy-beach-ocean.jpg";
import bannerImage3 from "../../../../assets/Images/nature-landscape-with-black-sand-beach.jpg";

const Banner = () => {
  const imgData = [bannerImage1, bannerImage2, bannerImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

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
      {/*  TITLE SECTION  **************************************************************** */}
      <div className="text-white absolute flex justify-center items-center text-center z-10 inset-0">
        <div>
          <h2 style={{ fontFamily: "Barlow, sans-serif " }} className="md:text-lg sm: text-sm uppercase md:tracking-[0.4em] sm: tracking-[0.2em] mb-5">
            Let&apos;s Travel the World With Us
          </h2>
          <h1 style={{ fontFamily: "Poppins, sans-serif " }} className="md:text-7xl sm: text-5xl font-bold uppercase">
            Explore The World <br />
             With <span className="bannertext">SkyScape</span>
          </h1>
        </div>
      </div>
      {/* TOUR SELECTION SECTION **************************************************************  */}
      <div>

      </div>
    </div>
  );
};

export default Banner;
