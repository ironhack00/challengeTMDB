const Card = ({ title, image }) => {
  return (
    <div
      className="relative w-full bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      aria-label={`Película: ${title}`}
    >
      <div className="relative w-full aspect-video group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Overlay con título */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm text-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="block truncate">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
