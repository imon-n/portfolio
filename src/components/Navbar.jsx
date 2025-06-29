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
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <a
          onClick={() => smoothScrollTo("hero", 1500)}
          className="btn btn-ghost normal-case text-xl text-primary"
        >
          Port<span className="text-base-content -ml-1">folio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  onClick={() =>
                    smoothScrollTo(item.href.replace("#", ""), 1200)
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="btn btn-primary px-0">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1-OMpLZkh49k25j1EtkmhXT_y0iJ20aYg/view"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-base-100 shadow-md">
          <ul className="menu menu-vertical px-4 py-2">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  onClick={() => {
                    smoothScrollTo(item.href.replace("#", ""), 1500);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="btn btn-primary px-0">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1-OMpLZkh49k25j1EtkmhXT_y0iJ20aYg/view"
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
