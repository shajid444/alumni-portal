import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
// import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const AddProfile = () => {
    //---------------------------------

    const { user } = useContext(AuthContext);
    // console.log(user.displayName, user.email);
    const { displayName, email } = user;

    const AddProfile = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const age = form.age.value;
        const gender = form.gender.value;
        const nationality = form.nationality.value;
        const role = form.role.value;
        


        const item = { photo, name, age, gender, nationality, role,  displayName, email };
        console.log(item);

        fetch(`http://localhost:5000/profile`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // form.reset;
                    Swal.fire({
                        title: 'Success!',
                        text: 'Profile added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }




    //------------------------------------
    return (
        <section className="p-6 ">
            <Helmet>
                <title>Add alumni</title>
            </Helmet>
            <form onSubmit={AddProfile} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Give your details</p>

                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-6">
                            <label htmlFor="photo_url" className="text-sm">photo url</label>
                            <input id="" type="url"
                                name="photo" placeholder="photo url" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">Name</label>
                            <input id="" type="text"
                                name="name" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="age" className="text-sm">age</label>
                            <input id="age" type="text"
                                name="age" placeholder="age" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="gender" className="text-sm">gender</label>
                            <input id="gender" type="text"
                                name="gender" placeholder="gender" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="nationality" className="text-sm">nationality</label>
                            <input id="nationality" type="text" name="nationality" placeholder="nationality" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="role" className="text-sm">role</label>
                            <input id="role" type="text" name="role" placeholder="role" className="w-full rounded-md text-center focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Give your details</p>
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
                            <button className="btn w-full bg-lime-700 text-black ">Add</button>

                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddProfile;