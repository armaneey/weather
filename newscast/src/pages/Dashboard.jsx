import React from "react";
import Weather from "../components/Weather";
import News from "../components/News";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Dashboard = ({ theme, onThemeChange }) => {
  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Weather & News Dashboard</h1>
          <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Weather />
          <News />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
