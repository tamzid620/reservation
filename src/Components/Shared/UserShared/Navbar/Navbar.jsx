import { Link } from "react-router-dom";
import mainIcon from "../../../../assets/Icons/skyscape-removebg.png";
import menuIcon from "../../../../assets/Icons/menu.png";
import { useEffect, useState } from "react";

const userNavUl = [
  {
    path: "/",
    title: "Home ",
  },
  {
    path: "/",
    title: " About",
  },
  {
    path: "/",
    title: "Blog ",
  },
  {
    path: "/",
    title: "Gallery ",
  },
  {
    path: "/",
    title: " Contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toogleNavbar = () => {
    setNavOpen(!navOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav
  style={{ fontFamily: "Barlow, sans-serif" }}
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-[#3674B5]" : "bg-transparent"
  } md:shadow-none sm:shadow-md`}
>
      <div className=" lg:max-w-6xl md:max-w-3xl sm: w-full mx-auto">
        {/*/  NAVLIST FOR LARGE AND MEDIUM DEVICE  ************************************************************** */}
        <div className="md:flex justify-between items-center sm: hidden py-3 px-2 ">
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
          </div>
          {/* ------------------ ul li section ------------------ */}
          <div>
            <ul className="flex gap-10 mt-3">
              {userNavUl.map(({ path, title }, index) => (
                <Link key={index} to={path}>
                  <li className="text-white hover:text-[#A1E3F9] uppercase font-semibold text-xs">
                    {title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <hr className="opacity-10"/>


        {/*  NAVLIST FOR SMALL DEVICE ************************************************************** */}
        <div className="sm: flex justify-between items-center md:hidden py-3 px-2 ">
          {/* ------------------ icon section ------------------ */}
          <div>
            <div className="relative flex items-center">
              <h1 className="relative text-2xl font-extrabold uppercase text-white">
                SkyScape
              </h1>
              <img src={mainIcon} alt="" className="w-[60px]" />
              <p className="absolute top-7 left-10 text-[10px] font-semibold text-white">
                explore the world
              </p>
            </div>
          </div>
          {/* ------------------ menu & ul li  section ------------------ */}
          <div>
            <img
              onClick={toogleNavbar}
              src={menuIcon}
              alt=""
              className="w-10"
            />
          </div>
        </div>
        {navOpen ? (
            <div className="flex justify-center" >
          <ul className="text-center gap-10 bg-white py-4 w-[350px] absolute top-full z-50">
            {userNavUl.map(({ path, title }, index) => (
              <Link key={index} to={path}>
                <li className="text-black hover:text-[#A1E3F9] uppercase font-semibold leading-10 ">
                  {title}
                </li>
              </Link>
            ))}
          </ul>
            </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
