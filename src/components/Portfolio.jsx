import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const cards = [0, 1, 2, 3];

const cardVariants = {
    enter: (direction) => ({
        opacity: 0,
        x: direction === 1 ? 120 : -120,
    }),
    center: {
        opacity: 1,
        x: 0,
    },
    exit: (direction) => ({
        opacity: 0,
        x: direction === 1 ? -120 : 120,
    }),
    };

export default function Portfolio() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    const forward = () => {
        setDirection(1);
        setIndex((i) => (i + 1) % cards.length);
    };

    const backward = () => {
        setDirection(-1);
        setIndex((i) => (i - 1 + cards.length) % cards.length);
    };

    const left = cards[index];
    const right = cards[(index + 1) % cards.length];

    return (
    <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-12 gap-10 items-center">

            <div className="col-span-12 lg:col-span-6">
                <p className="text-purple-800 font-bold text-2xl mb-5">
                    VIDEO EDITOR
                </p>

                <h1 className="text-white text-5xl lg:text-6xl font-bold">
                    MY LATEST <br /> PORTFOLIO
                </h1>
                <div className="w-full h-[225px] bg-[linear-gradient(135deg,#26143F_0%,#151515_55%)] rounded-xl shadow-md mt-5">
                    <div className="p-4">
                        <p className="text-white font-bold text-xl pb-4">
                            Creative Video Editor
                        </p>

                        <p className="text-white font-medium text-lg leading-relaxed">
                            I create cinematic edits, motion graphics, and storytelling visuals
                            that enhance brand identity and engagement across platforms.
                        </p>
                    </div>
                    
                    <div className="flex gap-6 p-4">
                        <button onClick={backward} className="custom-target">
                            <ArrowBackIosNewIcon sx={iconStyle} />
                        </button>
                        <button onClick={forward} className="custom-target">
                            <ArrowForwardIosIcon sx={iconStyle} />
                        </button>
                    </div>
                </div>
        </div>

        {/* CARDS */}
        <div className="col-span-12 lg:col-span-6 relative h-[450px] overflow-hidden">

          {/* LEFT CARD */}
          <AnimatePresence custom={direction}>
            <motion.div
              key={`left-${left}`}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: "linear" }}
              className="absolute left-0 top-0 w-[48%] h-full bg-slate-700"
            />
          </AnimatePresence>

          {/* RIGHT CARD */}
          <AnimatePresence custom={direction}>
            <motion.div
              key={`right-${right}`}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: "linear" }}
              className="absolute right-0 top-0 w-[48%] h-full bg-slate-800"
            />
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}

const iconStyle = {
  color: "#fff",
  width: "50px",
  height: "50px",
  background: "#000",
  padding: "10px",
  borderRadius: "50%",
};
