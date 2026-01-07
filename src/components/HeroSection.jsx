import DownloadIcon from '@mui/icons-material/Download';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { LandingData } from "../data/LandingData";

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative hidden lg:flex justify-center items-center">
          <div className="w-[420px] h-[420px] bg-white/10 backdrop-blur-sm rounded-full"></div>
        </div>

        <div className="text-white">
          <p className="animate-on-view text-purple-800 font-bold mb-4 text-2xl">
            {LandingData.name}
          </p>

          <h1 className="animate-on-view text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
            {LandingData.titleFirst} <br />
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            {LandingData.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="custom-target bg-purple-800 text-black px-7 py-4 font-semibold flex items-center gap-2 hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-purple-800 transition-all delay-800">
              DOWNLOAD CV
              <DownloadIcon />
              
            </button>

            <button className="custom-target bg-gray-950 px-7 py-4 flex items-center gap-3 text-white hover:text-white hover:outline hover:outline-2 hover:outline-purple-800 transition-all delay-800">
              <PlayCircleOutlineIcon 
              className="text-purple-800"/>
              <span className="font-medium">
                WATCH THE VIDEO
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
