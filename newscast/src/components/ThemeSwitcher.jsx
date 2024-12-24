import React from "react";

const ThemeSwitcher = ({ theme, onThemeChange }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onThemeChange("light")}
        className={`px-4 py-2 rounded ${
          theme === "light" ? "bg-blue-400 text-white" : "bg-gray-300"  }`} >
        Light
      </button>

      <button
        onClick={() => onThemeChange("dark")}
        className={`px-4 py-2 rounded ${
          theme === "dark" ? "bg-blue-800 text-white" : "bg-gray-700 text-white"  }`} >
        Dark
      </button>

      <button
        onClick={() => onThemeChange("gray")}
        className={`px-4 py-2 rounded ${
          theme === "gray" ? "bg-blue-600 text-white" : "bg-gray-500 text-white"   }`}  >
        Gray
      </button>
    </div>
  );
};

export default ThemeSwitcher;