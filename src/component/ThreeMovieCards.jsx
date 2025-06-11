import React, { useEffect, useState } from "react";
import { useFetchMovies } from "../hook/useFetchMovies";
import { fetchNewMovies } from "../api/tmdb";
import Card from "./UI/Card";
import SkeletonCard from "./Skeleton/ThreeMovieCardsSkeleton";

export default function ThreeMovieCards() {
  const { movies, error } = useFetchMovies(fetchNewMovies);

  // Estado local para forzar loading 5 segundos
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Esperar 5 segundos para quitar loading
    const timeout = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timeout); // limpiar timeout si se desmonta
  }, []);

  return (
    <div className="w-full h-full px-2 md:px-4 flex flex-col">
      {/* Título principal */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
          POPULAR MOVIES 2021
        </h2>

        {/* Sólo visible en desktop */}
        <span className="hidden md:inline text-sm text-gray-400 cursor-pointer hover:underline">
          All movies &gt;
        </span>
      </div>

      {/* Contenedor tarjetas */}
      <div
        className="
          flex overflow-x-auto snap-x snap-mandatory gap-4
          md:grid md:grid-cols-3 md:overflow-visible
          flex-grow md:gap-10
        "
      >
        {loading
          ? // Mostrar 3 SkeletonCard mientras loading es true
            [1, 2, 3].map((i) => <SkeletonCard key={i} />)
          : movies.slice(0, 3).map((movie) => (
              <div
                key={movie.id}
                className="
                  snap-center flex-shrink-0 w-[280px]
                  md:flex-shrink md:w-auto md:flex-grow md:flex md:hover:scale-105 md:transition-transform md:duration-300
                "
              >
                <Card
                  title={movie.title}
                  image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
              </div>
            ))}
      </div>

      {error && (
        <div className="text-red-500 mt-4 text-sm text-center">
          Error: {error}
        </div>
      )}
    </div>
  );
}
