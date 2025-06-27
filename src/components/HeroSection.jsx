import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-base-100 px-4"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="block">Hi, I'm</span>
          <span className="text-primary"> Jakia</span>
          <span className="ml-2 text-secondary">Sultana</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-base-content/70">
          I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.
        </p>

        {/* CTA Button */}
        <div>
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-base-content/60 mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
