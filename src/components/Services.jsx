import ServiceCard from "./ServiceCard";
import { ServiceData } from "../data/ServiceData";

function Services() {
  return (
    <section className=" text-white py-16">
      <div className="max-w-7xl mx-4 px-6 mt-24">
        <h2 className="animate-on-view text-purple-800 text-2xl font-bold text-center mb-4">MY SERVICE</h2>
        <h1 className="animate-on-view text-5xl text-center font-bold mb-12">PUSHING BOUNDARIES: MY PORTFOLIO OF LIMITLESS IDEAS</h1>

        <div className="service-card-animate grid grid-cols-1 md:grid-cols-3 gap-2">
          {ServiceData.map((data) => (
            <ServiceCard 
              key={data.id}
              Icon={data.emoji}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;