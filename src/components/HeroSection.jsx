import { ArrowDown } from "lucide-react";
import ImonImg from "/projects/2025-removebg-preview.png";
import smoothScrollTo from "../hooks/smoothScrollTo"

const HeroSection = () => {
  // const smoothScrollTo = (targetId, duration) => {
  //   const element = document.getElementById(targetId);
  //   if (!element) return;
  //   const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  //   const startPosition = window.scrollY;
  //   const distance = targetPosition - startPosition;
  //   let startTime = null;

  //   const easeInOutQuad = (t, b, c, d) => {
  //     t /= d / 2;
  //     if (t < 1) return (c / 2) * t * t + b;
  //     t--;
  //     return (-c / 2) * (t * (t - 2) - 1) + b;
  //   };

  //   const animation = (currentTime) => {
  //     if (startTime === null) startTime = currentTime;
  //     const timeElapsed = currentTime - startTime;
  //     const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
  //     window.scrollTo(0, run);
  //     if (timeElapsed < duration) requestAnimationFrame(animation);
  //   };

  //   requestAnimationFrame(animation);
  // };


  return (
    <section
      id="hero"
      className="min-h-screen bg-base-100 flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6  md:pt-5"
    >
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center md:text-left space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <br />
          <span className="text-primary">Nur Mohammad</span>{" "}
          <span className="text-secondary">Imon</span>
        </h1>

        <p className="text-base md:text-lg text-base-content/70">
          I create stellar web experiences with modern technologies.
          Specializing in front-end development, I build interfaces that are
          both beautiful and functional.
        </p>

        <div>
          <a
            onClick={() => smoothScrollTo("projects", 1500)}
            href="#"
            className="btn btn-primary"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg">
        <img
          src={ImonImg}
          alt="Nur Mohammad Imon"
          className="w-full object-contain"
        />
      </div>

      {/* Scroll Indicator (Optional) */}
      <a
        onClick={() => smoothScrollTo("about", 1200)}
        className="absolute cursor-pointer bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce"
        aria-label="Scroll to Projects"
      >
        <span className="text-sm text-base-content/60 mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};

export default HeroSection;
