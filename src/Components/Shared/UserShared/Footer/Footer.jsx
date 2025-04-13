import mainIcon from "../../../../assets/Icons/skyscape-removebg.png";
import "./Footer.css";
import icon1 from '../../../../assets/Icons/facebook.png'
import icon2 from '../../../../assets/Icons/twitter.png'
import icon3 from '../../../../assets/Icons/pinterest.png'
import icon4 from '../../../../assets/Icons/instagram.png'


const socialData =[
    {
        icon: icon1
    },
    {
        icon: icon2
    },
    {
        icon: icon3
    },
    {
        icon: icon4
    },
]

const Footer = () => {
  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif " }}
      className="bg-[#3674B5] text-white pt-20 pb-10"
    >
      <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5">
        {/* = INFORMATION SECTION =-=================================================== */}
        <div className="grid md:grid-cols-3 mb-8">
          {/* ------------------ icon section ------------------ */}
          <div>
            <div className="relative flex items-center">
              <h1 className="relative text-2xl font-extrabold uppercase text-white">
                SkyScape
              </h1>
              <img src={mainIcon} alt="" className="w-[70px]" />
              <p className="absolute top-8 left-10 text-[10px] font-semibold text-white">
                explore the world
              </p>
            </div>
            <p className="mt-5">
              Each imperdiet sapien portttito the drinking selling the commodo
              erat acar accumsa lobortis, enim diam the nesuen.
            </p>
            <div className="flex items-center gap-3 mt-5">
             {
                socialData.map(({icon}, index) => (
                        <img key={index} src={icon} alt="" className="w-9 bg-[#172554] rounded-full" />
                ))
             }
            </div>
          </div>
          {/* ------------------ Quick Links section ------------------ */}
          <div>
            <h1
              style={{ fontFamily: "Poppins, sans-serif " }}
              className="text-xl font-semibold text-center"
            >
              Quick Links
            </h1>
            <ul className="footer-ul text-center text-lg mt-5">
              <li>About</li>
              <li>Tours</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* ------------------ Subscribe section ------------------ */}
          <div>
            <h1
              style={{ fontFamily: "Poppins, sans-serif " }}
              className="text-xl font-semibold text-center"
            >
              Subscribe
            </h1>
            <p className="mt-5">
              Sign up for our monthly blogletter to stay informed about travel
              and tours
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Email Adress"
                className="relative bg-white text-black mt-5 w-[340px] px-5 py-5"
              />
              <button className="absolute top-9 right-14 bg-blue-950 hover:bg-blue-800 px-5 py-2">Send</button>
            </div>
          </div>
        </div>
        <hr />
        <p
         style={{ fontFamily: "Poppins, sans-serif " }}
         className="mt-4">©2025 <span className="text-[#172554]"> SoftPlatoon.</span> All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
