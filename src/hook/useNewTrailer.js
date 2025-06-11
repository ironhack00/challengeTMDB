import { useState, useEffect, useRef, useMemo } from "react";

export function useTrailerSlider(movies, step = 2) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isNewest, setIsNewest] = useState(true);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const sortedMovies = useMemo(() => {
    if (!movies) return [];
    return [...movies].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return isNewest ? dateB - dateA : dateA - dateB;
    });
  }, [movies, isNewest]);

  const totalMovies = sortedMovies.length;

  useEffect(() => {
    if (!isHovered && totalMovies > 0) {
      intervalRef.current = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + step) % totalMovies);
          setFade(true);
        }, 500);
      }, 7000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, totalMovies, step]);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      setFade(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isNewest]);

  const toggleSort = () => {
    setIsNewest((prev) => !prev);
  };

  const setHovered = (hovered) => {
    setIsHovered(hovered);
  };

  const visibleMovies = sortedMovies.slice(currentIndex, currentIndex + step);

  return {
    visibleMovies,
    fade,
    toggleSort,
    isNewest,
    setHovered,
  };
}
