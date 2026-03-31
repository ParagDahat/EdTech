import SpotlightCard from './SpotLightCard';
import mentor1 from '/mentor1.jpg';
// import mentor2 from '../assets/mentor2.jpg';
// import mentor3 from '../assets/mentor3.jpg';

const mentors = [
  {
    name: "Sakshi Thakre",
    position: "Web Developer",
    image: mentor1,
    description: "Guiding learners with real-world skills.",
  },
  {
    name: "Navin Sharma",
    position: "Data Science Mentor",
    image: mentor1,
    description: "Turning data into actionable knowledge.",
  },
  {
    name: "Pranjal Jaiswal",
    position: "Full-Stack Trainer",
    image: mentor1,
    description: "Building full-stack confidence in you.",
  },
];

const MentorsSection = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 ">
        
      {mentors.map((mentor, idx) => (
        <SpotlightCard
          key={idx}
          className="text-white"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-60 h-60 rounded-full object-cover border-2 border-cyan-400"
            />
            <div>
              <h3 className="text-2xl font-semibold">{mentor.name}</h3>
              <p className="text-sm text-cyan-300">{mentor.position}</p>
            </div>
            <p className="text-lg text-gray-300">{mentor.description}</p>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default MentorsSection;
