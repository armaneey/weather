import React from "react";

const HeroSection = () => {
  return (
    <div
  className=" h-screen w- full flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/image.jpg')" }}>
  <h1 className="text-4xl font-bold">Stay Informed, Stay Ahead</h1>
  <p className="mt-2 text-lg">
    Get the latest weather updates and top news stories at your fingertips.
  </p>
  <a
    href="#content"
    className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200"
  >
    Explore Now
  </a>
</div>
  )
}

export default HeroSection;
