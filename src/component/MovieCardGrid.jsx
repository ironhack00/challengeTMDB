import React, { useState, useEffect } from "react";
import { useFetchMovies } from "../hook/useFetchMovies";
import { fetchNewMovies } from "../api/tmdb";
import MovieCard from "./UI/MovieCard";
import SkeletonCard from "./Skeleton/MovieCardGridSkeleton";

export default function MovieCardGrid() {
  const { movies, loading, error } = useFetchMovies(fetchNewMovies);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second delay for skeleton display
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!movies || movies.length < 2)
    return <div>Not enough movies available.</div>;

  if (loading || showLoading) {
    // Show skeleton cards while loading or during delay
    return (
      <div className="w-full h-full px-2 md:px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            Continue Watching
          </h2>
        </div>

        {/* Mobile Skeleton */}
        <div className="block md:hidden">
          <div className="flex gap-4 overflow-x-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[70%] sm:w-[50%]">
                <SkeletonCard />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Skeleton */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-10">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  // Show movies when loading is complete and timeout has ended
  return (
    <div className="w-full h-full px-2 md:px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
          Continue Watching
        </h2>

        {/* Desktop only */}
        <span className="hidden md:inline text-sm text-gray-400 cursor-pointer hover:underline">
          All movies &gt;
        </span>
      </div>

      {/* Mobile: horizontal carousel */}
      {/* Mobile: infinite horizontal carousel */}
      <div className="block md:hidden">
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ WebkitOverflowScrolling: "touch" }}
          ref={(el) => {
            if (!el) return;

            // Detect scroll end and loop back
            el.addEventListener("scroll", () => {
              if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
                el.scrollLeft = 0; // Reset scroll to beginning
              }
            });
          }}
        >
          {[...movies.slice(0, 10), ...movies.slice(0, 10)].map(
            (movie, index) => (
              <div key={index} className="flex-shrink-0 w-[70%] sm:w-[50%]">
                <MovieCard movie={movie} />
              </div>
            )
          )}
        </div>
      </div>

      {/* Desktop: 2-column grid */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-10">
        <MovieCard movie={movies[0]} />
        <MovieCard movie={movies[1]} />
      </div>
    </div>
  );
}
