import { Menu, X } from "lucide-react";
import { useState } from "react";
import smoothScrollTo from "../hooks/smoothScrollTo";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-black fixed top-0 z-50 shadow-md py-3">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <a
          onClick={() => smoothScrollTo("hero", 1500)}
          className="btn btn-ghost normal-case text-2xl font-bold text-primary"
        >
          Port<span className="text-white -ml-1">folio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex item-center">
          <ul className="menu menu-horizontal mx-3 font-semibold text-white">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  onClick={() =>
                    smoothScrollTo(item.href.replace("#", ""), 1200)
                  }
                  className="hover:text-primary text-lg transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* download btn  */}
        <div className="hidden md:flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1Qki8DevnVL4cPhBLtkSZti8Is5dkVTo6/view?usp=drive_link"
            className="btn btn-primary px-4 py-1 text-white"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black shadow-md">
          <ul className="menu menu-vertical px-4 py-2 text-white">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  onClick={() => {
                    smoothScrollTo(item.href.replace("#", ""), 1500);
                    setIsMenuOpen(false);
                  }}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1-OMpLZkh49k25j1EtkmhXT_y0iJ20aYg/view"
                className="btn btn-primary px-4 py-1 text-white"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
