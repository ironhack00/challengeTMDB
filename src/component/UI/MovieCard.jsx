import { useState } from "react";

const IMG_BASE = import.meta.env.VITE_IMG_BASE;

export default function MovieCard({ movie }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className="relative bg-black rounded-2xl overflow-hidden shadow-md group w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer"
      onClick={toggleActive}
      tabIndex={0}
      onBlur={() => setIsActive(false)}
      aria-label={`Película: ${movie.title}`}
    >
      {/* Imagen */}
      <img
        src={`${IMG_BASE}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover object-bottom"
      />

      {/* Overlay con título y descripción truncada */}
      <div
        className={`absolute inset-0 bg-gray-800/70 flex flex-col items-center justify-center text-center px-4 py-2 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h2 className="text-white text-lg font-semibold mb-1">{movie.title}</h2>
        <p className="text-white text-xs sm:text-sm leading-snug line-clamp-3">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
