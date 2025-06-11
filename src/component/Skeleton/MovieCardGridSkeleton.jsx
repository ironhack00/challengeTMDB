// ./Skeleton/SkeletonCard.jsx
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-gray-700 rounded-lg w-full h-48 md:h-64">
      {/* Simula imagen */}
      <div className="bg-gray-600 h-32 md:h-44 rounded-t-lg"></div>
      {/* Simula texto */}
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-600 rounded w-1/2"></div>
      </div>
    </div>
  );
}
