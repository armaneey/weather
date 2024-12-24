import React from "react";
import News from "../components/News";

const NewsPage = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center text-white-800"
    style={{ backgroundImage: "url('imag.png')"}} >
    <div className="bg-rose bg-opacity-80 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">News</h1>
        <News />
      </div>
    </div>
  </div>
);
};

export default NewsPage;