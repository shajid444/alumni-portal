import React from 'react';
import { Link } from 'react-router-dom';

const AlumniCard = ({ item }) => {
    console.log(item);
    // const { _id,name, image_url, nsu_id } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://i.ibb.co.com/ZfbnQRV/muhammad-rizwan-Vnydp-Ki-CDa-Y-unsplash.jpg"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>NSU-ID : {item.nsu_id}</p>
                <div className="card-actions">
                    <Link to={`/details/${item._id}`}>

                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AlumniCard;