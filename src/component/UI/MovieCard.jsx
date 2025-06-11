const IMG_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }) {
  return (
    <div className="relative bg-black rounded-2xl overflow-hidden shadow-md group w-full h-48 sm:h-56 md:h-64 lg:h-72 ">
      {/* Imagen */}
      <img
        src={`${IMG_BASE}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover object-bottom"
      />

      {/* Overlay con fondo gris semitransparente que aparece al hover */}
      <div className="absolute inset-0 bg-gray-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <h2 className="text-white text-lg font-semibold text-center px-2">
          {movie.title}
        </h2>
      </div>
    </div>
  );
}
