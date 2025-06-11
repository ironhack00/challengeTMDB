import { CiPlay1 } from "react-icons/ci";

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

        {/* Overlay con ícono fijo a la izquierda y texto adaptable */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gray-500/30 text-black text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center pl-16 pr-4">
          {/* Ícono fijo y centrado */}
          <div className="absolute left-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center pl-1">
            <CiPlay1 className="text-2xl text-black" />
          </div>
          {/* Título adaptable */}
          <span className="truncate w-full text-white">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
