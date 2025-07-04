import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import smoothScrollTo from "../hooks/smoothScrollTo";
import ImonImg from "/projects/2025-removebg-preview.png";

const HeroSection = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-8 md:pt-5"
    >
      {/* Star Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute bg-gradient-to-r from-white to-transparent rounded-full"
            style={{
              width: `${meteor.size * 50}px`,
              height: `${meteor.size * 2}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              animation: `meteor ${meteor.animationDuration}s linear ${meteor.delay}s infinite`,
            }}
          />
        ))}

        <style>
          {`
            @keyframes meteor {
              0% {
                transform: translate(0, 0) rotate(45deg);
                opacity: 1;
              }
              100% {
                transform: translate(200px, 200px) rotate(45deg);
                opacity: 0;
              }
            }
          `}
        </style>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 text-center md:text-left space-y-6 max-w-xl text-white -mt-32 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hi, I'm <br />
          <span className="text-primary">Nur Mohammad</span>{" "}
          <span className="text-secondary">Imon</span>
        </h1>

        <p className="text-base md:text-lg text-white/70">
          I create stellar web experiences with modern technologies.
          Specializing in front-end development, I build interfaces that are
          both beautiful and functional.
        </p>

        {/* Social Icons */}
        <div className="pt-0">
          <div className="flex space-x-4 md:space-x-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/nur-mohammad-imon-29a2b4255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-primary transition-colors text-xl md:text-2xl"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://www.facebook.com/mdimon.imon.18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-primary transition-colors text-xl md:text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/imon-n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors text-xl md:text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/mdimon.imon.18/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-primary transition-colors text-xl md:text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div>
          <div className="flex gap-3 pt-0  items-center sm:items-start justify-center md:justify-start">
            <a
              onClick={() => smoothScrollTo("projects", 1500)}
              href="#"
              className="btn btn-sm md:btn-md btn-primary"
            >
              View My Work
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Qki8DevnVL4cPhBLtkSZti8Is5dkVTo6/view?usp=drive_link"
              className="btn btn-sm md:btn-md btn-outline btn-primary text-white"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative z-10 mt-8 md:-mt-10 flex-1 max-w-sm md:max-w-md lg:max-w-lg">
        <img
          src={ImonImg}
          alt="Nur Mohammad Imon"
          className="w-64 h-64 md:w-full md:h-full rounded-full object-cover mx-auto"
          
        />
      </div>

      {/* Scroll Indicator */}
      <a
        onClick={() => smoothScrollTo("about", 1200)}
        className="absolute z-10 cursor-pointer bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce"
        aria-label="Scroll to About"
      >
        <span className="text-sm text-white/60 mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};

export default HeroSection;
