// src/components/SectionRight.jsx
import React from "react";
import ImageSlider from "../ImageSlider";
import MovieCardGrid from "../MovieCardGrid";
import ThreeMovieCards from "../ThreeMovieCards";

export default function SectionRight({ collapsed }) {
  return (
    <div
      className={`flex flex-col w-full transition-all duration-300 ease-in-out p-4 md:p-10 gap-15 ${
        collapsed ? "w-full" : "w-2/3"
      }`}
    >
      {/* Slider */}
      <div className="rounded-md overflow-hidden">
        <ImageSlider />
      </div>

      {/* MovieCardGrid */}
      <div className="rounded-md">
        <MovieCardGrid />
      </div>

      {/* ThreeMovieCards */}
      <div className="rounded-md">
        <ThreeMovieCards />
      </div>
    </div>
  );
}
