import React from "react";

const TopStories = () => {
    const stories = [
        {
            id: 1,
            image: "https://i.ibb.co.com/G5kqmHy/Vibrant-Stadium-Celebration.jpg", // Replace with actual image URL
            title: "Paris 2024 had it all: Sporting drama, revered venues, singalongs... and Snoop Dogg",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/Jjcn8nm/Moment-of-Triumph-Wheelchair-Athlete-s-Victory-Celebration.jpg", 
            title: "How did your favorite athletes and teams perform? Check out Paris 2024 official results",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/vcHwTQ1/Midnight-Velocity-Snowboarder-in-Motion.jpg", 
            title: "Records, stats and facts from a historic Olympic Games Paris 2024",
        },
        {
            id: 4,
            image: "https://i.ibb.co.com/X7WsrkJ/Aqua-Dynamics-The-Competitive-Swimmer-in-Motion.jpg", // Replace with actual image URL
            title: "Los Angeles 2028: Paris 2024 breakout stars to watch at LA28",
        },
        {
            id: 5,
            image: "https://i.ibb.co.com/7KX12B6/Racing-Cyclists-Reflections-of-Determination-and-Speed.jpg", // Replace with actual image URL
            title: "From Kipchoge to Fraser-Pryce: Ten stars end Olympic careers at Paris 2024",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Top Stories</h2>
                <a href="#viewAll" className="text-blue-500 hover:underline">
                    View all
                </a>
            </div>

            {/* Main Stories Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Story */}
                <div className="col-span-2">
                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                        <img
                            src={stories[0].image}
                            alt={stories[0].title}
                            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="text-white font-bold text-lg">{stories[0].title}</h3>
                        </div>
                    </div>
                </div>

                {/* Second Main Story */}
                <div>
                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                        <img
                            src={stories[1].image}
                            alt={stories[1].title}
                            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="text-white font-bold text-lg">{stories[1].title}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Stories Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                {stories.slice(2).map((story) => (
                    <div key={story.id} className="relative overflow-hidden rounded-lg shadow-md group">
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-2">
                            <h4 className="text-white font-semibold text-sm">{story.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopStories;
