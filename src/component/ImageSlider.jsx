import React, { useState, useEffect, useRef } from "react";
import { useFetchMovies } from "../hook/useFetchMovies";
import { fetchNewMovies } from "../api/tmdb";

export default function ImageSlider() {
  const { movies, loading, error } = useFetchMovies(fetchNewMovies);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    clearInterval(intervalRef.current);

    if (!paused && movies?.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % movies.length);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [paused, movies]);

  if (loading) return <div className="text-white p-4">Cargando...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!movies || movies.length === 0)
    return <div className="p-4">No hay películas.</div>;

  const movie = movies[current];
  const imagePath = movie.backdrop_path || movie.poster_path;

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl h-[150px] sm:h-[180px] md:h-[220px] lg:h-[280px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={`${baseUrl}${imagePath}`}
        alt={movie.title || "Imagen"}
        className="w-full h-full object-cover rounded-2xl transition-opacity duration-700"
      />

      <button
        aria-label={`Watch now: ${movie.title}`}
        className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition cursor-pointer"
      >
        Watch now
      </button>
    </div>
  );
}
