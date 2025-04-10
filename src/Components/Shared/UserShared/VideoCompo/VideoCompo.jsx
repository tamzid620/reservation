import travelVideo from "../../../../assets/Videos/travel-video.mp4";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const VideoCompo = () => {
  return (
    <div className="relative">
      <div className=" relative w-full h-[500px] overflow-hidden shadow-lg">
        <video
          className="w-full h-full object-cover"
          src={travelVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        {/* text section  */}
        <div className="text-white  absolute flex justify-center items-center text-center z-10 inset-0">
          <div>
            <h1
              style={{ fontFamily: "Poppins, sans-serif " }}
              className="text-4xl font-semibold"
            >
              Costa Victoria Coachin
            </h1>
            <div className="flex justify-center gap-3 text- mt-5 ">
              <p className="flex items-center gap-1">
                <IoLocationOutline />
                Maldives{" "}
              </p>
              <p className="flex items-center gap-1">
                <FaRegClock /> 4 Days + 3 Nights{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCompo;
