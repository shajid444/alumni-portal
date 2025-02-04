import React from 'react';

const MedalTableSection = () => {
  const medalData = [
    { id: 1, country: 'United States of America', gold: 40, silver: 44, bronze: 42, total: 126, flag: '🇺🇸' },
    { id: 2, country: "People's Republic of China", gold: 40, silver: 27, bronze: 24, total: 91, flag: '🇨🇳' },
    { id: 3, country: 'Japan', gold: 20, silver: 12, bronze: 13, total: 45, flag: '🇯🇵' },
    { id: 4, country: 'Australia', gold: 18, silver: 19, bronze: 16, total: 53, flag: '🇦🇺' },
    { id: 5, country: 'France', gold: 16, silver: 26, bronze: 22, total: 64, flag: '🇫🇷' },
    { id: 6, country: 'Netherlands', gold: 15, silver: 7, bronze: 12, total: 34, flag: '🇳🇱' },
    { id: 7, country: 'Great Britain', gold: 14, silver: 22, bronze: 29, total: 65, flag: '🇬🇧' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Medal Table</h1>
      </header>

      <div className="container mx-auto py-8 px-4">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">Order</th>
                <th className="border border-gray-300 px-4 py-2">NOCs</th>
                <th className="border border-gray-300 px-4 py-2">Gold</th>
                <th className="border border-gray-300 px-4 py-2">Silver</th>
                <th className="border border-gray-300 px-4 py-2">Bronze</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {medalData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 flex items-center space-x-2">
                    <span>{item.flag}</span>
                    <span>{item.country}</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.gold}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.silver}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.bronze}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Medal Table</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded-md">Medalists</button>
        </div>
      </div>
    </div>
  );
};

export default MedalTableSection;



