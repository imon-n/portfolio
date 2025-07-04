import { Briefcase, Code, User } from "lucide-react";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = 100; // fixed number of stars for simplicity
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
    <div id="about" className="relative py-24 px-8 md:px-4">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-black -z-10 overflow-hidden">
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
              filter: "drop-shadow(0 0 2px #FFD700)", // subtle glow
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-white/70">
              I specialize in creating responsive, accessible, and performant
              web applications using modern technologies.
            </p>

            <p className="text-white/70">
              I'm passionate about creating elegant solutions to complex
              problems and constantly learning new technologies to stay ahead in
              the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1Qki8DevnVL4cPhBLtkSZti8Is5dkVTo6/view?usp=drive_link"
                className="btn btn-outline btn-primary text-white"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Column - Skills/Features */}
          <div className="grid grid-cols-1 gap-6">
            {[{
              title: "Front-End Developer",
              description: "Building responsive and interactive user interfaces using modern technologies like React, Tailwind CSS, and JavaScript."
            },{
              title: "MERN Stack Developer",
              description: "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js with a focus on performance and scalability."
            },{
              title: "Problem Solver",
              description: "Skilled in solving real-life and algorithmic problems using data structures and algorithms to craft efficient solutions."
            }].map(({title, description}, i) => (
              <div key={i} className="card bg-base-200 shadow-md">
                <div className="card-body flex-row items-start gap-4 bg-gray-800">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-400">{title}</h4>
                    <p className="text-gray-90">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
