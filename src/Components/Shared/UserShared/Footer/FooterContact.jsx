import React from "react";
import icon1 from "../../../../assets/Icons/white-call.png";
import icon2 from "../../../../assets/Icons/white-letter.png";
import icon3 from "../../../../assets/Icons/white-map.png";

const contactData = [
  {
    icon: icon1,
    title: "Call us",
    info: "+1 123-456-0606",
  },
  {
    icon: icon2,
    title: "Write to us",
    info: "info@skyscape.com",
  },
  {
    icon: icon3,
    title: "Address",
    info: "12 St, SC 29401  UAE",
  },
];

const FooterContact = () => {
  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif " }}
      className="relative py-32 text-white"
    >
      <div className="bg-black opacity-80 absolute inset-0 z-0" />
      {/* information section  */}
      <div className="relative z-10 lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5 border p-8">
        {/* = INFORMATION SECTION =-=================================================== */}
        <div className="grid md:grid-cols-3 sm: grid-cols-1 gap-10 ">
          {contactData.map(({ icon, title, info }, index) => (
            <div key={index}
            className={`flex items-center gap-5 ${
                (index === 1 || index === contactData.length - 1) ? "md:border-l-2 border-white md:pl-10" : ""
              }`}
             >
              <div className="bg-blue-950 p-3">
                <img src={icon} alt="" className="w-12"/>
              </div>
              <div>
                <h1 style={{ fontFamily: "Poppins, sans-serif " }}>{title}</h1>
                <h2>{info}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
