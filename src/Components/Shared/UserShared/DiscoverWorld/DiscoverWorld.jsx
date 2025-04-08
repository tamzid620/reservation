import React from "react";
import checkLogo from "../../../../assets/Icons/check.png";
import phoneLogo from "../../../../assets/Icons/telephone-call.png";
import discoverImage from "../../../../assets/Images/discover world.jpg";

const DiscoverWorld = () => {
  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif " }}
      className="bg-gray-100 py-44"
    >
      <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5">
        {/* =============================== INFORMATION SECTION =-===================== */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-10 justify-center items-center">
          {/* title section  */}
          <section>
            <h1 className="tracking-[0.3em] text-[#3674B5] font-semibold uppercase mb-2">
              The best travel agency
            </h1>
            <h2
              style={{ fontFamily: "Poppins, sans-serif " }}
              className="text-5xl uppercase font-bold"
            >
              {" "}
              Discover The <span className="text-[#3674B5]">World</span>
              <br />
              WIth Our Guild
            </h2>
            <p className="text-gray-700 my-5">
              You can choose any country with good tourism. Agency elementum
              sesue the aucan vestibulum aliquam justo in sapien rutrum
              volutpat. Donec in quis the pellentesque velit. Donec id velit ac
              arcu posuere blane.
              <br /> <br />
              Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue
              the miss varius natoque penatibus et magnis dis parturient monte.
            </p>
            <p className="flex items-center">
              <img src={checkLogo} alt="check mark" className="w-8" />{" "}
              <span className="ms-4">20 Years of Experience</span>
            </p>
            <p className="flex items-center mt-3">
              <img src={checkLogo} alt="check mark" className="w-8" />{" "}
              <span className="ms-4">150+ Tour Destinations</span>
            </p>
            <p className="flex items-center mt-7">
              <img src={phoneLogo} alt="check mark" className="w-12" />{" "}
              <span className="ms-4">
                For information
                <br />
                855 333 4444
              </span>
            </p>
          </section>
          {/* image section  */}
          <section className="relative">
            <img src={discoverImage} alt="section image"  className="relative z-40 shadow-xl"/>
            <div className="lg:w-[426px] md:w-[330px] lg:h-[543px] md:h-[450px] md:block sm: hidden bg-[#3674B5] absolute top-8 left-10 md:left-10 "></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DiscoverWorld;
