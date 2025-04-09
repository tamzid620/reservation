import React from "react";
import airplaneLogo from "../../../../assets/Icons/airplane.png";
import houseLogo from "../../../../assets/Icons/house.png";
import shipLogo from "../../../../assets/Icons/cruise.png";
import ticketLogo from "../../../../assets/Icons/ticket.png";

const counterData = [
  {
    logo: airplaneLogo,
    number: "600",
    title: "Flight Booking",
  },
  {
    logo: houseLogo,
    number: "360",
    title: "Amazing Tour",
  },
  {
    logo: shipLogo,
    number: "240",
    title: "Cruises Booking",
  },
  {
    logo: ticketLogo,
    number: "120",
    title: "Hotel Booking",
  },
];

const TourCounter = () => {
  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif " }}
      className="relative py-32 text-white"
    >
      <div className="bg-black opacity-50 absolute inset-0 z-0" />
      {/* information section  */}
      <div className="relative z-10 lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {counterData.map(({ logo, number, title }, index) => (
            <div key={index} className="flex justify-center text-center">
              <div>
                {/* <div className="w-24 bg-white opacity-30 p-7 rounded-full ms-5">
                  <img src={logo} alt="logo" className="" />
                </div> */}
                <div className="relative w-24 h-24  ms-5">
  <div className="w-full h-full bg-white opacity-30 p-5 rounded-full"></div>
  <img src={logo} alt="logo" className="absolute inset-0 m-auto z-10 w-14" />
</div>

                <h1 className="my-2 text-3xl font-semibold">{number}</h1>
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourCounter;
