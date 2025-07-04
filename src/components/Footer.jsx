import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import smoothScrollTo from "../hooks/smoothScrollTo";

const Footer = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = 80;
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
    <footer className="relative py-12 px-4 overflow-hidden">
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

      {/* Main Footer Content */}
      <div className="border-t border-base-300 mt-12 pt-8 flex justify-center items-center relative z-10">
        <p className="text-sm text-white/70 text-center w-full max-w-md">
          &copy; {new Date().getFullYear()} imon. All rights reserved.
        </p>
        <a
          onClick={() => smoothScrollTo("hero", 1500)}
          className="absolute right-4 p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
