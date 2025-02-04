import React from "react";
import "./MedalTable.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const MedalTable = () => {

    const [data, setData] = useState([]);
    
    
        useEffect(() => {
            fetch('http://localhost:5000/medal')
                .then(res => res.json())
                .then(data => setData(data))
    
    
        }, [])


    // const data = [
    //     {
    //         rank: 1,
    //         country: "United States of America",
    //         flag: "https://flagcdn.com/us.svg",
    //         gold: 40,
    //         silver: 44,
    //         bronze: 42,
    //         total: 126,
    //     },
    //     {
    //         rank: 2,
    //         country: "People's Republic of China",
    //         flag: "https://flagcdn.com/cn.svg",
    //         gold: 40,
    //         silver: 27,
    //         bronze: 24,
    //         total: 91,
    //     },
    //     {
    //         rank: 3,
    //         country: "Japan",
    //         flag: "https://flagcdn.com/jp.svg",
    //         gold: 20,
    //         silver: 12,
    //         bronze: 13,
    //         total: 45,
    //     },
    //     {
    //         rank: 4,
    //         country: "Australia",
    //         flag: "https://flagcdn.com/au.svg",
    //         gold: 18,
    //         silver: 19,
    //         bronze: 16,
    //         total: 53,
    //     },
    //     {
    //         rank: 5,
    //         country: "France",
    //         flag: "https://flagcdn.com/fr.svg",
    //         gold: 16,
    //         silver: 26,
    //         bronze: 22,
    //         total: 84,
    //     },
    //     {
    //         rank: 6,
    //         country: "Netherlands",
    //         flag: "https://flagcdn.com/nl.svg",
    //         gold: 15,
    //         silver: 7,
    //         bronze: 12,
    //         total: 34,
    //     },
    //     {
    //         rank: 7,
    //         country: "Great Britain",
    //         flag: "https://flagcdn.com/gb.svg",
    //         gold: 14,
    //         silver: 22,
    //         bronze: 29,
    //         total: 65,
    //     },
    // ];

    return (
        <div className="medal-table-section ">
            <div className="header">
                <h2>MEDALS</h2>
            </div>
            <table className="medal-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Teams/NOCs</th>
                        <th>🥇</th>
                        <th>🥈</th>
                        <th>🥉</th>
                        <th>🏅</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.rank}>
                            <td>{item.rank}</td>
                            <td>
                                <img src={item.flag} alt={item.country} className="flag" /> {item.country}
                            </td>
                            <td>{item.gold}</td>
                            <td>{item.silver}</td>
                            <td>{item.bronze}</td>
                            <td>{item.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex  items-center justify-between">


                <Link to='/addteam'>

                    <div className="actions">
                        <input type="text" placeholder="+ Add your team" />

                    </div>
                </Link>
                <Link to='/medalsection'>

                    <div>
                        <button>View all →</button>
                    </div>

                </Link>


            </div>





        </div>
    );
};

export default MedalTable;
