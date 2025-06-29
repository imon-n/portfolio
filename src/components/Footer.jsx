import { ArrowUp } from "lucide-react";
import smoothScrollTo from "../hooks/smoothScrollTo";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-base-200 border-t border-base-300 mt-12 pt-8 flex justify-center items-center">
      <p className="text-sm text-gray-600 text-center w-full max-w-md">
        &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
      </p>
      <a
        onClick={() => smoothScrollTo("hero", 1500)}
        className="absolute right-4 p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
