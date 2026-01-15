import WorkCard from "./WorkCard";
import { WorkData }from "../data/WorkData";

function WorkExperiences() {
  return (
    <section className="text-white py-4">
        <div className="p-8">
            <h2 className="text-purple-800 text-2xl font-bold text-center mb-4">MY EXPERIENCE</h2>
            <h1 className="text-5xl text-center font-bold mb-12">CRAFTING GROWTH: MY CAREER EXPERIENCE</h1>
        </div>
        <div className="timeline">
            {WorkData.map((item) => (
                <WorkCard 
                    key = {item.id}
                    work = {item.work}
                    role = {item.role}
                    company = {item.company}
                    timespan = {item.timespan}
                    content1 = {item.content1}
                    content2 = {item.content2}
                    content3 = {item.content3}
                    />
            ))}
        </div>

    </section>
    
  );
}

export default WorkExperiences;
