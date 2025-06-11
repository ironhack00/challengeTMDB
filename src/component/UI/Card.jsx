import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";

const Card = ({ title, image }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className="relative w-full bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      aria-label={`Película: ${title}`}
      onClick={toggleActive} // en mobile esto detecta toque
      onBlur={() => setIsActive(false)} // opcional, si quieres que se cierre cuando pierda foco
      tabIndex={0} // para que sea foco accesible con teclado
    >
      <div className="relative w-full aspect-video group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className={`absolute bottom-0 left-0 w-full h-1/3 bg-gray-500/30 text-black text-sm flex items-center pl-16 pr-4 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="absolute left-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center pl-1">
            <CiPlay1 className="text-2xl text-black" />
          </div>
          <span className="truncate w-full text-white">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
