import React from 'react';
// import { FaVoicemail } from 'react-icons/fa';
import { MdDelete, MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';

const AlumniCard = ({ item }) => {
    console.log(item);

    // const axiosSecure = useAxiosPublic();
    // const { data: info = [], refetch } = useQuery({

    //     queryKey: ['info'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/nfo/${item._id}`);
    //         return res.data;
    //     }
    // })
    // const handleDelete = id => {


    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {



    //             axiosSecure.delete(`/info/${id}`)
    //                 .then(res => {
    //                     if (res.data.deleteCount > 0) {

    //                         // refetch();
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your item has been deleted.",
    //                             icon: "success"
    //                         });

    //                     }
    //                 })


    //         }
    //     });
    // }
    // const { _id,name, image_url, nsu_id } = item;
    return (
        <div className="card bg-white w-96 h-96 sm:w-full shadow-2xl shadow-black">
            <figure className="px-10 pt-10">
                <img
                    src={item.photo? item.photo :'https://i.ibb.co.com/rZMFVQB/19774338-9lm2-awda-210826.jpg'}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title"></h2>
                <p>Name: {item.name} </p>  
                <p>Role:{item.role}</p>
                <p className='flex justify-center items-center gap-1'><MdEmail />{item.email} </p>
                <div className="card-actions">
                    <Link to={`/details/${item._id}`} >
                    

                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide border-0 border-b-4 border-b-black text-green-600 rounded-md">View Details</button>
                    </Link>

                    <div className='flex justify-between'>
                        <Link  to={`/update/${item._id}`}  >
                        

                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide border-0 border-b-4 border-b-black text-green-600 rounded-md ">Update Details</button>
                        </Link>
                    </div>
                    <div className='flex items-center text-2xl text-red-800'>
                        {/* <MdDelete /> */}
                        <button  className="btn btn-ghost btn-xs">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                    </div>
                </div>
                <div className="card-actions">

                </div>


            </div>
        </div>
    );
};

export default AlumniCard;