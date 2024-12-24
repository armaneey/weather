import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import NewsPage from "./pages/NewsPage";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";


const App = () => {
  const [theme, setTheme] = useState("light");

 
  const handleThemeChange = (newTheme) => {
    console.log("Theme Changed", newTheme);
    setTheme(newTheme);
  };

  
  const themeClasses = {
    light: "bg-gray-100 text-gray-800",
    dark: "bg-gray-900 text-white",
    gray: "bg-gray-500 text-gray-100",
  };

  return (
    <Router>
      <div className={`min-h-screen ${themeClasses[theme]}`}>
        <nav className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/weather" className="hover:underline">
                Weather
              </Link>
              <Link to="/news" className="hover:underline">
                News
              </Link>
            </div>
            <ThemeSwitcher theme={theme} onThemeChange={handleThemeChange} />
          </div>
        </nav>

       
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};


export default App;