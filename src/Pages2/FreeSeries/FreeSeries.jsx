import React from "react";

const FreeSeries = () => {
  const images = [
    "https://i.ibb.co/1TsYYtC/Focused-Female-Archer-at-Competition.jpg",
    "https://i.ibb.co/sy4dzS4/Field-Hockey-Duel-Reflection.jpg",
    "https://i.ibb.co/6NwR9NQ/Triumphant-Athlete-Celebrating-Victory.jpg",
    "https://i.ibb.co/ZccTSNt/Dynamic-Winter-Skier-in-Orange-with-Sunlit-Backdrop.jpg",
    "https://i.ibb.co/6Nrnf2w/Diagonal-Trio-in-Vibrant-Winter-Attire-Cross-Country-Skiing.jpg",
    "https://i.ibb.co/Qj99n8f/Kayaking-in-Seine-River-near-Notre-Dame.jpg",
    "https://i.ibb.co/NxBF2N4/Colorful-Roadway-Art-Leading-to-Eiffel-Tower.jpg",
    "https://i.ibb.co/B6yzpBT/Team-Dynamics-in-Bobsleigh-Action.jpg",
  ];

  return (
    <section className="w-full bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            ACCESS ALL OUR ORIGINAL SERIES FOR FREE
          </h2>
          <p className="mb-4">
            You are just one step away from thousands of unique stories.
          </p>
          <button className="bg-black px-4 py-2 rounded">Discover Now</button>
        </div>
        <div className="grid grid-cols-4 gap-2 md:w-1/2 mt-6 md:mt-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Series Thumbnail ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeSeries;
