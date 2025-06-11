import { useState, useEffect, useRef, useMemo } from "react";
import Card from "./UI/Card";
import { useFetchMovies } from "../hook/useFetchMovies";
import { fetchNewMovies } from "../api/tmdb";

export default function NewTrailer() {
  const { movies, loading, error } = useFetchMovies(fetchNewMovies);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isNewest, setIsNewest] = useState(true);
  const [fade, setFade] = useState(true); // true = visible (opacity 1), false = hidden (opacity 0)
  const intervalRef = useRef(null);
  const step = 2;

  const sortedMovies = useMemo(() => {
    if (!movies) return [];
    return [...movies].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return isNewest ? dateB - dateA : dateA - dateB;
    });
  }, [movies, isNewest]);

  const totalMovies = sortedMovies.length;

  // Auto-slide con fade effect
  useEffect(() => {
    if (!isHovered && totalMovies > 0) {
      intervalRef.current = setInterval(() => {
        // Primero fade out
        setFade(false);
        // Luego, después de la transición, cambiar índice y fade in
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + step) % totalMovies);
          setFade(true);
        }, 500); // tiempo igual a la duración del fade en CSS
      }, 7000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, totalMovies]);

  // Resetear índice cuando cambia el orden y fade in
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      setFade(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isNewest]);

  if (loading) {
    return <p className="text-white px-4 py-2">Cargando trailers...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 px-4 py-2">
        Lo sentimos, ha ocurrido un problema al cargar las películas.
      </p>
    );
  }

  const visibleMovies = sortedMovies.slice(currentIndex, currentIndex + step);

  const toggleSort = () => {
    setIsNewest((prev) => !prev);
  };

  return (
    <section className="w-full flex flex-col items-center px-4 py-8 bg-black">
      <header className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold">
          New Trailers
        </h2>
        <div
          className="text-white text-sm sm:text-base font-medium mt-2 sm:mt-0 cursor-pointer select-none"
          onClick={toggleSort}
          aria-label="Cambiar orden de trailers"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleSort();
          }}
        >
          <span className="pr-3">Sort By</span>
          {isNewest ? "Today" : "Older"}
        </div>
      </header>

      <div
        className={`w-full max-w-6xl flex flex-col gap-8 items-center justify-center transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {visibleMovies.length > 0 ? (
          visibleMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-full flex items-center justify-center"
            >
              <Card
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
            </div>
          ))
        ) : (
          <p className="text-white text-center py-8">
            No hay trailers disponibles en este momento.
          </p>
        )}
      </div>
    </section>
  );
}
