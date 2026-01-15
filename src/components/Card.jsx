function Card({ position, phase, label }) {
  const base =
    "absolute h-full w-[48%] rounded-xl bg-slate-700 transition-all duration-700 ease-linear flex items-center justify-center text-white text-3xl";

  let styles = "";

  if (position === "left") {
    if (phase === "fade") styles = "opacity-0";
    else styles = "left-0 opacity-100";
  }

  if (position === "right") {
    if (phase === "slide") styles = "left-0";
    else styles = "right-0 opacity-100";
  }

  if (position === "hidden") {
    if (phase === "appear") styles = "right-0 opacity-100";
    else styles = "opacity-0 right-[-60%]";
  }

  return <div className={`${base} ${styles}`}>{label}</div>;
}

export default Card;
