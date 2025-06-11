import { useFetchMovies } from "../hook/useFetchMovies";
import { fetchMovieGenres } from "../api/tmdb";
import { useState, useEffect, useCallback } from "react";
import { getRandomColor } from "../styles/genreColors";

export default function FavouriteGenres() {
  const { movies: genres, loading, error } = useFetchMovies(fetchMovieGenres);
  const [likedGenres, setLikedGenres] = useState([]);
  const [genreColors, setGenreColors] = useState({});

  useEffect(() => {
    if (genres && genres.length > 0 && Object.keys(genreColors).length === 0) {
      const colorsMap = {};
      genres.forEach((genre) => {
        colorsMap[genre.id] = getRandomColor();
      });
      setGenreColors(colorsMap);
    }
  }, [genres, genreColors]);

  const toggleLike = useCallback((genre) => {
    setLikedGenres((prev) =>
      prev.some((g) => g.id === genre.id)
        ? prev.filter((g) => g.id !== genre.id)
        : [...prev, genre]
    );
  }, []);

  if (loading) return <div className="text-white p-4">Cargando géneros...</div>;
  if (error)
    return <div className="text-red-400 p-4">Error al cargar géneros.</div>;

  return (
    <div className="p-4 rounded-md flex-shrink-0 bg-[#0d0d0d] max-w-4xl mx-auto">
      <h2 className="text-white text-3xl font-semibold mb-4">Genres</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {genres.map((genre) => {
          const isLiked = likedGenres.some((g) => g.id === genre.id);
          const colorClass = genreColors[genre.id] || "bg-gray-400 text-black";

          return (
            <button
              key={genre.id}
              onClick={() => toggleLike(genre)}
              aria-pressed={isLiked}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white
                ${
                  isLiked
                    ? `${colorClass} brightness-75 border-2 border-white`
                    : `${colorClass} hover:brightness-110`
                }`}
            >
              {genre.name}
            </button>
          );
        })}
      </div>

      {likedGenres.length > 0 && (
        <div>
          <h3 className="text-white text-xl font-semibold mb-2">
            My Favourites :
          </h3>
          <div className="flex flex-wrap gap-2">
            {likedGenres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => toggleLike(genre)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    genreColors[genre.id] || "bg-green-600 text-white"
                  } hover:brightness-125`}
              >
                {genre.name} ✕
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
