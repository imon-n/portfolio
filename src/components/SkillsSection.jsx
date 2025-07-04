import { useState, useEffect } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
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

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-black -z-10">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              filter: "drop-shadow(0 0 2px #FFD700)",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl relative z-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={`btn btn-sm md:btn-md text-white border-2 rounded-full capitalize ${
                activeCategory === category
                  ? "btn-primary"
                  : "btn-outline btn-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="card bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="card-body">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold  text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-white">
                    {skill.level}%
                  </span>
                </div>

                <progress
                  className="progress progress-primary w-full"
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
