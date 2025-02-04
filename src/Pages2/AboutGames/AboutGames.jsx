import React from "react";

const AboutGames = () => {
    const games = [
        { title: "Sports", image: "https://i.ibb.co.com/GMbw6SX/Swimmer-in-Paris-1.jpg" },
        { title: "Venues", image: "https://i.ibb.co.com/MV0bGcq/Aerial-Retro-Parisian-Olympic-Venue-with-Eiffel-Tower.jpg" },
        { title: "Celebrating the Games", image: "https://i.ibb.co.com/pjjyGGG/Vibrant-Stadium-Celebration.jpg" },
    ];

    return (
        <section className="w-full p-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">ABOUT THE GAMES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {games.map((game, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                            <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{game.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutGames;
