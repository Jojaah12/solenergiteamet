import { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer flex flex-col justify-between w-6 h-4 md:hidden"
        onClick={toggleMenu}
      >
        <div
          className={`w-full h-1 bg-white transition-transform ${
            isMenuOpen ? "transform rotate-45 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-white transition-opacity ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-white transition-transform ${
            isMenuOpen ? "transform -rotate-45 -translate-y-1" : ""
          }`}
        ></div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-md p-4">
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={closeMenu}
          >
            Close
          </button>
          {/* Add your menu items here */}
          <div className="mb-2 cursor-pointer">Menu Item 1</div>
          <div className="mb-2 cursor-pointer">Menu Item 2</div>
          <div className="cursor-pointer">Menu Item 3</div>
          {/* ... */}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
