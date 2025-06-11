import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiApps2Line } from "react-icons/ri";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

const NAV_LINKS = [
  { label: "Movies", to: "/movies" },
  { label: "TV Shows", to: "/tv-shows" },
  { label: "Animations", to: "/animations" },
  { label: "Plans", to: "/plans" },
];

const NAV_ICONS = [
  { icon: <IoSearch size={24} />, key: "search", to: "/search" },
  { icon: <RiApps2Line size={24} />, key: "apps", to: "/apps" },
  {
    icon: (
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        className="w-full h-full object-cover rounded-full"
      />
    ),
    key: "profile",
    isImage: true,
    to: "/profile",
  },
];

export default function NavBar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to detect if the viewport is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const combinedNavItems = [...NAV_LINKS, ...NAV_ICONS];

  // Update active index when the route changes
  useEffect(() => {
    const currentIndex = combinedNavItems.findIndex(
      (item) => item.to === location.pathname
    );
    setActiveIndex(currentIndex !== -1 ? currentIndex : null);
  }, [location.pathname]);

  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  // Update indicator position on hover or active item change
  useEffect(() => {
    if (
      currentIndex !== null &&
      itemRefs.current[currentIndex] &&
      navRef.current
    ) {
      const itemRect = itemRefs.current[currentIndex].getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      let leftPos = itemRect.left - navRect.left + itemRect.width / 2;

      const minLeft = 20;
      const maxLeft = navRect.width - 20;
      if (leftPos < minLeft) leftPos = minLeft;
      if (leftPos > maxLeft) leftPos = maxLeft;

      setIndicatorPosition(leftPos);
    } else {
      setIndicatorPosition(0);
    }
  }, [currentIndex]);

  // Close menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className="relative text-white bg-black border-b border-gray-600 shadow-md
                 flex flex-wrap items-center justify-between px-4 py-3
                 sm:px-6 sm:py-4
                 md:px-8 md:py-5"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Hamburger button - visible only on small screens */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>

      {/* Left navigation - horizontal menu on md+, hidden on small if not open */}
      <ul
        className={`
          flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 flex-1
          ${isMenuOpen ? "block" : "hidden"} sm:flex
          bg-black sm:bg-transparent
          absolute sm:static top-full left-0 w-full sm:w-auto
          border-t border-gray-700 sm:border-0
          z-50
          px-4 sm:px-0 py-4 sm:py-0
        `}
        onClick={() => setIsMenuOpen(false)} // Close menu on item click
      >
        {NAV_LINKS.map(({ label, to }, index) => (
          <li
            key={to}
            ref={(el) => (itemRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            className="relative"
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base ${
                  isActive ? "font-semibold text-white" : ""
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right side icons */}
      <ul className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
        {NAV_ICONS.map(({ icon, key, isImage, to }, i) => {
          const index = NAV_LINKS.length + i;
          return (
            <li
              key={key}
              ref={(el) => (itemRefs.current[index] = el)}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative ${
                isImage
                  ? "w-8 h-8 sm:w-10 sm:h-10 overflow-hidden border border-gray-600 hover:border-orange-500 rounded-full"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {to ? <NavLink to={to}>{icon}</NavLink> : icon}
            </li>
          );
        })}
      </ul>

      {/* Orange triangle indicator - visible only on screens larger than sm */}
      {currentIndex !== null && !isMobile && (
        <div
          style={{ left: indicatorPosition }}
          className="pointer-events-none absolute bottom-[-1px] w-0 h-0
           border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent
           border-b-[14px] border-b-orange-500
           -translate-x-1/2 transition-all duration-300"
        />
      )}
    </nav>
  );
}
