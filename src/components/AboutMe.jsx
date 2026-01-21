import { AboutData } from "../data/AboutData"; 
function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="text-left ">
                <span className=" text-purple-800 font-bold text-2xl">
                    {AboutData.sectionName}
                </span>

                <h1 className="about-title text-white text-4xl lg:text-6xl font-bold mt-4 leading-tight">
                    {AboutData.sectionHeadingFirst}
                </h1>

                <p className=" text-gray-300 mt-10 max-w-3xl text-lg leading-relaxed">
                    {AboutData.sectionDescription}
                </p>
            </div>

            <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[700px] h-[320px] md:h-[600px] bg-white/10">
                </div>
            </div>

        </div>

    </div>
  );
}

export default AboutMe;
