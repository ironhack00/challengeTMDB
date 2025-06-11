import NewTrailer from "../NewTrailer";
import FavouriteGenres from "../FavouriteGenres";
import { useEffect, useState } from "react";

export default function SectionLeft({ collapsed, setCollapsed }) {
  const [panelWidth, setPanelWidth] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    function updateLayout() {
      const width = window.innerWidth;
      if (collapsed) {
        setPanelWidth(0);
        setIsFullScreen(false);
      } else {
        if (width >= 1280) setPanelWidth(450);
        else if (width >= 1024) setPanelWidth(360);
        else if (width >= 768) setPanelWidth(320);
        else if (width >= 640) setPanelWidth(300);
        else {
          setPanelWidth(width);
          setIsFullScreen(true);
          return;
        }
        setIsFullScreen(false);
      }
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [collapsed]);

  return (
    <>
      <aside
        className={`
          transition-all duration-500 ease-in-out
         bg-black/80 text-white h-auto
          ${isFullScreen ? " top-0 left-0 z-40" : "relative"}
          ${
            collapsed
              ? "w-0"
              : "w-full sm:w-[300px] md:w-[320px] lg:w-[360px] xl:w-[400px]"
          }
        `}
        style={{ width: collapsed ? 0 : panelWidth, flexShrink: 0 }}
      >
        {!collapsed && (
          <div className="flex flex-col gap-4 px-2 py-4 h-full  min-h-0">
            {/* NewTrailer ocupa el espacio natural */}
            <div className="min-h-0 overflow-hidden">
              <NewTrailer />
            </div>

            {/* FavouriteGenres crece para ocupar espacio disponible */}
            <div className="flex-grow min-h-0 overflow-hidden">
              <FavouriteGenres />
            </div>
          </div>
        )}
      </aside>

      <button
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expandir sección" : "Colapsar sección"}
        className={`
          fixed top-1/2 transform -translate-y-1/2
          w-10 h-10 flex items-center justify-center
          bg-white text-gray-700 border border-gray-400 rounded-full
          shadow-md hover:bg-gray-100 transition-all duration-300 z-50
          focus:outline-none
        `}
        style={{
          left: collapsed
            ? 0
            : isFullScreen
            ? Math.max(panelWidth - 20, 20)
            : panelWidth,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {collapsed ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          )}
        </svg>
      </button>
    </>
  );
}
