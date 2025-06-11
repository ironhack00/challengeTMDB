// styles/genreColors.js
export const colorClasses = [
  "bg-red-600 text-white",
  "bg-yellow-400 text-black",
  "bg-blue-600 text-white",
  "bg-gray-800 text-white",
  "bg-pink-500 text-white",
  "bg-purple-700 text-white",
  "bg-green-600 text-white",
  "bg-indigo-600 text-white",
  "bg-teal-600 text-white",
  "bg-orange-500 text-black",
];

export function getRandomColor() {
  return colorClasses[Math.floor(Math.random() * colorClasses.length)];
}
