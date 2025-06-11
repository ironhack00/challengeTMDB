// components/common/SkeletonCard.jsx
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="w-[280px] h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl bg-gray-800 animate-pulse md:w-auto md:flex-grow">
      <div className="w-full h-full bg-gray-700 rounded-2xl"></div>
    </div>
  );
}
