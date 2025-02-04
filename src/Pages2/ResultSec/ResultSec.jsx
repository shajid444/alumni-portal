import React, { useState } from 'react';

const ResultSec = () => {
  const [view, setView] = useState('schedule');
  const [selectedDate, setSelectedDate] = useState('24 Jul');

  const scheduleData = [
    {
      time: '19:00',
      sport: 'Football',
      group: "Men's Group B (#3)",
      teams: [
        { name: 'Argentina', score: 1 },
        { name: 'Morocco', score: 2 },
      ],
    },
    {
      time: '21:00',
      sport: 'Basketball',
      group: "Men's Quarterfinal",
      teams: [
        { name: 'USA', score: 89 },
        { name: 'France', score: 76 },
      ],
    },
  ];

  const overallSchedule = [
    { date: '24 Jul', sports: ['Ceremonies', 'Football'] },
    { date: '25 Jul', sports: ['3x3 Basketball', 'Archery'] },
    { date: '26 Jul', sports: ['Artistic Gymnastics', 'Athletics'] },
  ];

  return (
    <div className="bg-gray-100">
      <div className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-3xl font-bold">OLYMPIC SCHEDULE & RESULTS</h1>
        <h2 className="text-xl mt-2">{selectedDate}</h2>
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            view === 'schedule' ? 'bg-black text-white' : 'bg-gray-300'
          }`}
          onClick={() => setView('schedule')}
        >
          Schedule & Results
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            view === 'overview' ? 'bg-black text-white' : 'bg-gray-300'
          }`}
          onClick={() => setView('overview')}
        >
          Schedule Overview
        </button>
      </div>

      {view === 'schedule' ? (
        <div className="mt-4 px-6">
          <div className="text-center">
            <select
              className="border p-2 rounded-md"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option>24 Jul</option>
              <option>25 Jul</option>
              <option>26 Jul</option>
            </select>
          </div>
          <div className="mt-6 bg-white shadow-md rounded-md p-4">
            {scheduleData.map((match, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <h3 className="font-bold text-lg">{match.sport}</h3>
                <p className="text-gray-600">{match.group}</p>
                <p className="mt-2 text-gray-800">
                  {match.time} - {match.teams[0].name} vs {match.teams[1].name}
                </p>
                <p className="font-bold mt-2">
                  {match.teams[0].score} - {match.teams[1].score}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 px-6">
          <table className="table-auto w-full bg-white shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Sports</th>
              </tr>
            </thead>
            <tbody>
              {overallSchedule.map((day, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-center font-bold">{day.date}</td>
                  <td className="px-4 py-2 text-center">
                    {day.sports.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultSec;


