import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import useInfo from '../../Hooks/useInfo';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
// import axios from 'axios';

const Update = () => {

    const info = useLoaderData();
    console.log(info);

    // const {info} = useInfo();
    // console.log(info);
    // const [infoAll, setInfo] = useState([]); // List of all users
   

    // Fetch users from the backend
    // useEffect(() => {
    //     axios.get('http://localhost:5000/info') // Adjust the endpoint to match your backend
    //         .then((response) => {
    //             setInfo(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching users:', error);
    //         });
    // }, []);
    // console.log(infoAll);
    // const { user } = useContext(AuthContext);
    // console.log(user.displayName, user.email);

    // const displayName = user.displayName;
    // const email = user.email;

    const updateProfile = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const age = form.age.value;
        const gender = form.gender.value;
        const nationality = form.nationality.value;
        const role = form.role.value;
        


        const item = { photo, name, age, gender, nationality, role};
        console.log(item);

        fetch(`http://localhost:5000/profile/${info._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // form.reset;
                    Swal.fire({
                        title: 'Success!',
                        text: 'updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }
    return (
        <section className="p-6 ">
        <Helmet>
            <title>Update alumni</title>
        </Helmet>
        <form onSubmit={updateProfile}  className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Modify your details</p>

                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="photo_url" className="text-sm">photo url</label>
                        <input id="" type="url"
                            name="photo" defaultValue={info.photo} placeholder="photo url" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="name" className="text-sm">Name</label>
                        <input id="" type="text"
                            name="name" defaultValue={info.name} placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="age" className="text-sm">age</label>
                        <input id="age" type="text"
                            name="age" defaultValue={info.age} placeholder="age" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="gender" className="text-sm">gender</label>
                        <input id="gender" type="text"
                            name="gender" defaultValue={info.gender} placeholder="gender" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="nationality" className="text-sm">nationality</label>
                        <input id="nationality" type="text" name="nationality" defaultValue={info.nationality} placeholder="nationality" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>

                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="role" className="text-sm">role</label>
                        <input id="role" type="text" name="role" defaultValue={info.role} placeholder="role" className="w-full rounded-md text-center focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>



                </div>
            </fieldset>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Profile</p>
                    <p className="text-xs">Modify your data</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="username" className="text-sm">Username</label>
                        <input id="username" type="text"
                            name="username" placeholder="Username" defaultValue='username' className="w-full rounded-md text-center focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email"
                            name="email" placeholder="Email" defaultValue='user' className="w-full text-center rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>

                    <div className="col-span-6">
                        <button className="btn w-full bg-lime-700 text-black ">Update</button>

                    </div>
                </div>
            </fieldset>
        </form>
    </section>
    );
};

export default Update;