import { LogoData } from "../data/LogoData";
import LogoSlide from "./LogoSlide";

function Expertise() {
    return (
        <div className="w-full py-10" style={{background : "#141414"}}>
            <h1 className="text-white text-5xl font-bold mb-10 text-center">SOFTWARES KNOWN </h1>
            <div className="logos-container relative overflow-hidden w-full">
                <div className="logo-slide-wrapper flex">
                    <LogoSlide logos={LogoData} />
                    <LogoSlide logos={LogoData} />
                </div>
            </div>
        </div>
    );
}

export default Expertise;