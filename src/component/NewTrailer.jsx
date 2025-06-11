import Card from "./UI/Card";
import { useFetchMovies } from "../hook/useFetchMovies";
import { fetchNewMovies } from "../api/tmdb";
import { useTrailerSlider } from "../hook/useNewTrailer";

export default function NewTrailer() {
  const { movies, loading, error } = useFetchMovies(fetchNewMovies);
  const { visibleMovies, fade, toggleSort, isNewest, setHovered } =
    useTrailerSlider(movies, 2);

  const IMG_BASE = import.meta.env.VITE_IMG_BASE;

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
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {visibleMovies.length > 0 ? (
          visibleMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-full flex items-center justify-center"
            >
              <Card
                title={movie.title}
                image={`${IMG_BASE}${movie.backdrop_path}`}
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
