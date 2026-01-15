import { AboutData } from "../data/AboutData"; 
function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4 relative overflow-visible">

        {/* About Me Section */}
        <div className="mt-48 text-left">
            <span className="animate-on-view text-purple-800 font-bold text-2xl">
                {AboutData.sectionName}
            </span>

            <h1 className="animate-on-view text-white text-4xl lg:text-6xl font-bold mt-4 leading-tight">
                {AboutData.sectionHeadingFirst}
            </h1>

            <p className="text-gray-300 mt-10 max-w-3xl text-lg leading-relaxed">
                {AboutData.sectionDescription}
            </p>
        </div>

        <div className="about-art-wrapper ml-40 absolute left-1/4 top-1/4 mt-10">
            <div className="about-art w-[700px] h-[600px] bg-white/10 z-20">
            </div>
        </div>

    </div>
  );
}

export default AboutMe;
