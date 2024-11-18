import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useInfo from '../../Hooks/useInfo';
import { Helmet } from 'react-helmet-async';

const ViewDetails = () => {
    const id = useParams();

    const [info] = useInfo();
    // const info = useLoaderData();
    // const [information, setInformation] = useState([]);

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/info')
    //         .then(res => res.json())
    //         .then(data => {
                
    //             setInformation(data);
    //             // setLoading(false);
    //         });


    // }, [])
    console.log(info);
    console.log('id.item',id.item);

    const details = info.find(item => item._id === id.item);
   
    // console.log(details.name);

    // const{name, nsu_id,major_subject,department,image_url} = details;

    

    

    return (
        <div className="p-4 w-3/4 mx-auto shadow-xl bg-slate-300 ">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-3xl text-primary font-bold">name</a>
                </div>

            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src='https://i.ibb.co.com/ZfbnQRV/muhammad-rizwan-Vnydp-Ki-CDa-Y-unsplash.jpg' alt="" className="block object-cover object-center w-full rounded-md h-96 dark:bg-gray-500" />
                    <div className="flex items-center text-base justify-around">
                        <span className="bg-slate-400 p-3 rounded-lg">id: nsu_id</span>
                        <span className="bg-slate-400 p-3 rounded-lg">department: details.department </span>
                        <span className="bg-slate-400  p-3 rounded-lg">major: major_subject</span>
                    </div>
                </div>
                <div className="text-center bg-slate-300 p-5 rounded-md">
                    Description : 
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600"></h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600"></p>

                    <div className="flex justify-between bg-slate-300 p-5 rounded-md">

                        <p className="text-xl font-semibold ">
                            department
                        </p>
                        <p className="text-xl font-semibold">
                            #Catagory : 
                        </p>


                    </div>
                  




                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
