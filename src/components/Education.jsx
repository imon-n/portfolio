import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BSc in Electrical & Electronic Engineering (EEE)",
    institution: "University of Chittagong, Bangladesh",
    year: "2022 - 2026",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Agricultural University College, Mymensingh",
    year: "2018 - 2020",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Hazi Foyaz Uddin Akond High School, Netrakona",
    year: "2018",
  },
];

const Education = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = 100;
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }

    setStars(newStars);
  };

  return (
    <section id="education" className="relative bg-black px-6 md:px-4 pb-2 md:pb-10 overflow-hidden">
      {/* Star Layer */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="card bg-base-200/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="card-body bg-gray-800 rounded-2xl">
                <div className="flex items-start gap-4 mb-3 ">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 text-md md:text-lg font-semibold">{edu.institution}</p>
                    <span className="text-sm text-white">{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
