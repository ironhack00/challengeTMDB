import { useState, useEffect, useRef } from "react";
import Card from "./UI/Card";
import { useFetchMovies } from "../hook/useFetchMovies";
import { fetchNewMovies } from "../api/tmdb";

export default function NewTrailer() {
  const { movies, loading, error } = useFetchMovies(fetchNewMovies);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const step = 2;

  const movieList = movies || [];
  const totalMovies = movieList.length;

  // Auto-slide logic
  useEffect(() => {
    if (!isHovered && totalMovies > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + step) % totalMovies);
      }, 7000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, totalMovies]);

  if (loading) {
    return <p className="text-white px-4 py-2">Cargando...</p>;
  }

  if (error) {
    return <p className="text-red-500 px-4 py-2">Error: {error}</p>;
  }

  const visibleMovies = movieList.slice(currentIndex, currentIndex + step);

  return (
    <section className="w-full flex flex-col items-center px-4 py-8 bg-black">
      <header className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold">
          New Trailers
        </h2>
        <div className="text-white text-sm sm:text-base font-medium mt-2 sm:mt-0">
          <span className="pr-3">Sort By</span> Today
        </div>
      </header>

      <div
        className="w-full max-w-6xl flex flex-col gap-8 items-center justify-center transition-all"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {visibleMovies.map((movie) => (
          <div
            key={movie.id}
            className="relative w-full flex items-center justify-center"
          >
            <Card
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
