import React, { useState } from 'react';

const HighlightsSectionDetails = () => {
  const [discipline, setDiscipline] = useState('All disciplines');
  const [highlightType, setHighlightType] = useState('Highlights');
  const [team, setTeam] = useState('All Teams/NOCs');

  const videos = [
    {
      title: 'Fireworks bring an end to an incredible Closing Ceremony | Paris 2024 highlights',
      description: 'At the Stade de France, IOC President Thomas Bach and French swimming sensation Léon Marchand and other athletes blew out the Olympic flame in the lantern, as the Olympic Games are declared closed.',
      thumbnail: 'https://i.ibb.co.com/8Bn6rMG/Stadium-Celebrations-A-Moment-of-Victory.jpg',
    },
    {
      title: 'Paris 2024 - The Recap | Olympic Games Paris 2024',
      description: 'A quick look at the most thrilling moments of the Paris 2024 Games.',
      thumbnail: 'https://i.ibb.co.com/ncTx1Kf/Woman-Holding-Torch-at-Outdoor-Stadium-Event.jpg',
    },
    {
      title: 'Summary of the Games | Olympic Games Paris 2024',
      description: 'Experience the excitement of the Paris 2024 Games with daily sports highlights.',
      thumbnail: 'https://i.ibb.co.com/YXX9Z6H/Female-Gymnasts-at-Competition.jpg',
      style: { objectPosition: 'center top' },
    },
    {
      title: 'Behind the Screen | Paris 2024',
      description: 'A look behind the scenes at how OBS broadcasts the biggest sporting event in the world.',
      thumbnail: 'https://i.ibb.co.com/gF6FPCb/Wheelchair-Basketball-Determination.jpg',
    },
    {
      title: 'Best Moments | Paris 2024',
      description: 'A look back at all the best moments of Paris 2024.',
      thumbnail: 'https://i.ibb.co.com/rkHY7cC/Triumphant-Wheelchair-Racer-Celebrates-Victory.jpg',
    },
  ];

  return (
    <div className="bg-white p-6">
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white text-center py-6">
        <h1 className="text-3xl font-bold">PARIS 2024 HIGHLIGHTS</h1>
      </div>

      <div className="flex flex-wrap justify-between items-center p-4">
        <select
          className="border p-2 rounded-md"
          value={discipline}
          onChange={(e) => setDiscipline(e.target.value)}
        >
          <option>All disciplines</option>
          <option>Swimming</option>
          <option>Athletics</option>
          <option>Gymnastics</option>
        </select>

        <select
          className="border p-2 rounded-md"
          value={highlightType}
          onChange={(e) => setHighlightType(e.target.value)}
        >
          <option>Highlights</option>
          <option>Daily Highlights</option>
          <option>Special Highlights</option>
        </select>

        <select
          className="border p-2 rounded-md"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        >
          <option>All Teams/NOCs</option>
          <option>Team USA</option>
          <option>Team France</option>
          <option>Team Japan</option>
        </select>
      </div>

      <div className="border-t mt-4 pt-4">
        <h2 className="text-2xl font-bold mb-4">HIGHLIGHTS VIDEOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="border rounded-md p-4">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-40 object-cover rounded-md" 
                style={video.style || {}} 
              />
              <h3 className="font-bold mt-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightsSectionDetails;
