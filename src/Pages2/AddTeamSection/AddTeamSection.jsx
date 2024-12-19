import React, { useState } from 'react';

const AddTeamSection = () => {
  const [view, setView] = useState('sports');
  const [searchTerm, setSearchTerm] = useState('');

  const sports = [
    { id: 1, name: 'Acrobatic Gymnastics', icon: '🤸' },
    { id: 2, name: 'Alpine Skiing', icon: '⛷️' },
    { id: 3, name: 'Archery', icon: '🏹' },
    { id: 4, name: 'Basketball', icon: '🏀' },
    { id: 5, name: 'Boxing', icon: '🥊' },
    { id: 6, name: 'Cycling', icon: '🚴' },
    { id: 7, name: 'Diving', icon: '🤿' },
    { id: 8, name: 'Fencing', icon: '🤺' },
    { id: 9, name: 'Football', icon: '⚽' },
    { id: 10, name: 'Hockey', icon: '🏑' },
    { id: 11, name: 'Rowing', icon: '🚣' },
    { id: 12, name: 'Swimming', icon: '🏊' },
    { id: 13, name: 'Tennis', icon: '🎾' },
    { id: 14, name: 'Table Tennis', icon: '🏓' },
    { id: 15, name: 'Badminton', icon: '🏸' },
    { id: 16, name: 'Golf', icon: '🏌️' },
    { id: 17, name: 'Rugby', icon: '🏉' },
    { id: 18, name: 'Volleyball', icon: '🏐' },
    { id: 19, name: 'Weightlifting', icon: '🏋️' },
    { id: 20, name: 'Wrestling', icon: '🤼' },
  ];

  const teams = [
    { id: 1, name: 'United States', flag: '🇺🇸' },
    { id: 2, name: 'China', flag: '🇨🇳' },
    { id: 3, name: 'Japan', flag: '🇯🇵' },
    { id: 4, name: 'Australia', flag: '🇦🇺' },
    { id: 5, name: 'Germany', flag: '🇩🇪' },
    { id: 6, name: 'Brazil', flag: '🇧🇷' },
    { id: 7, name: 'United Kingdom', flag: '🇬🇧' },
    { id: 8, name: 'France', flag: '🇫🇷' },
    { id: 9, name: 'India', flag: '🇮🇳' },
    { id: 10, name: 'Canada', flag: '🇨🇦' },
    { id: 11, name: 'Italy', flag: '🇮🇹' },
    { id: 12, name: 'South Africa', flag: '🇿🇦' },
    { id: 13, name: 'South Korea', flag: '🇰🇷' },
    { id: 14, name: 'Russia', flag: '🇷🇺' },
    { id: 15, name: 'Spain', flag: '🇪🇸' },
    { id: 16, name: 'Argentina', flag: '🇦🇷' },
    { id: 17, name: 'Netherlands', flag: '🇳🇱' },
    { id: 18, name: 'Mexico', flag: '🇲🇽' },
    { id: 19, name: 'Turkey', flag: '🇹🇷' },
    { id: 20, name: 'New Zealand', flag: '🇳🇿' },
  ];

  const athletes = [
    { id: 1, name: 'Simone BILES', country: 'USA', sport: 'Artistic Gymnastics', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'LeBron JAMES', country: 'USA', sport: 'Basketball', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Naomi OSAKA', country: 'JPN', sport: 'Tennis', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Usain BOLT', country: 'JAM', sport: 'Athletics', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Michael PHELPS', country: 'USA', sport: 'Swimming', image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Lionel MESSI', country: 'ARG', sport: 'Football', image: 'https://via.placeholder.com/100' },
    { id: 7, name: 'Katie LEDECKY', country: 'USA', sport: 'Swimming', image: 'https://via.placeholder.com/100' },
    { id: 8, name: 'Roger FEDERER', country: 'SUI', sport: 'Tennis', image: 'https://via.placeholder.com/100' },
    { id: 9, name: 'Novak DJOKOVIC', country: 'SRB', sport: 'Tennis', image: 'https://via.placeholder.com/100' },
    { id: 10, name: 'Shelly-Ann FRASER-PRYCE', country: 'JAM', sport: 'Athletics', image: 'https://via.placeholder.com/100' },
    { id: 11, name: 'Megan RAPINOE', country: 'USA', sport: 'Football', image: 'https://via.placeholder.com/100' },
    { id: 12, name: 'Andy MURRAY', country: 'GBR', sport: 'Tennis', image: 'https://via.placeholder.com/100' },
    { id: 13, name: 'Sun YANG', country: 'CHN', sport: 'Swimming', image: 'https://via.placeholder.com/100' },
    { id: 14, name: 'Allyson FELIX', country: 'USA', sport: 'Athletics', image: 'https://via.placeholder.com/100' },
    { id: 15, name: 'Rafael NADAL', country: 'ESP', sport: 'Tennis', image: 'https://via.placeholder.com/100' },
    { id: 16, name: 'Virat KOHLI', country: 'IND', sport: 'Cricket', image: 'https://via.placeholder.com/100' },
    { id: 17, name: 'David BECKHAM', country: 'GBR', sport: 'Football', image: 'https://via.placeholder.com/100' },
    { id: 18, name: 'Serena WILLIAMS', country: 'USA', sport: 'Tennis', image: 'https://via.placeholder.com/100' },
    { id: 19, name: 'Ma LONG', country: 'CHN', sport: 'Table Tennis', image: 'https://via.placeholder.com/100' },
    { id: 20, name: 'Neymar JR', country: 'BRA', sport: 'Football', image: 'https://via.placeholder.com/100' },
  ];

  const getFilteredItems = () => {
    let items = [];
    if (view === 'sports') items = sports;
    if (view === 'teams') items = teams;
    if (view === 'athletes') items = athletes;

    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center bg-black text-white py-6">
        <h1 className="text-3xl font-bold">Add Your Team</h1>
        <p className="text-lg mt-2">Explore Sports, Teams, and Athletes</p>
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            view === 'sports' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setView('sports')}
        >
          Sports
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            view === 'teams' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setView('teams')}
        >
          Teams
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            view === 'athletes' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setView('athletes')}
        >
          Athletes
        </button>
      </div>

      <div className="mt-4 px-6">
        <input
          type="text"
          placeholder={`Search ${view}`}
          className="w-full border p-2 rounded-md mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredItems().map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
            >
              {view === 'sports' && (
                <div className="text-4xl">{item.icon}</div>
              )}
              {view === 'teams' && (
                <div className="text-4xl">{item.flag}</div>
              )}
              {view === 'athletes' && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                {view === 'athletes' && (
                  <p className="text-sm text-gray-600">
                    {item.country}, {item.sport}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 px-6">
        <button className="text-gray-600 underline">Skip personalization</button>
        <button className="bg-black text-white px-4 py-2 rounded-md">Continue</button>
      </div>
    </div>
  );
};

export default AddTeamSection;

