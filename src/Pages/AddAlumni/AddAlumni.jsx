import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
// import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const AddAlumni = () => {
    //---------------------------------

    const { user } = useContext(AuthContext);
    // console.log(user.displayName, user.email);
    const { displayName, email } = user;

    const addAlumni = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const nsu_id = form.nsu_id.value;
        const major_subject = form.major_subject.value;
        const graduation_year = form.graduation_year.value;
        const department = form.department.value;
        


        const item = { photo, name, nsu_id, major_subject, graduation_year, department,  displayName, email };
        console.log(item);

        fetch(`http://localhost:5000/info`, {
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
                        text: 'Alumni added successfully',
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
            <form onSubmit={addAlumni} className="container flex flex-col mx-auto space-y-12">
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
                            <label htmlFor="nsu_id" className="text-sm">nsu_id</label>
                            <input id="nsu_id" type="text"
                                name="nsu_id" placeholder="nsu_id" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="major_subject" className="text-sm">major_subject</label>
                            <input id="major_subject" type="text"
                                name="major_subject" placeholder="major_subject" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="graduation_year" className="text-sm">graduation_year</label>
                            <input id="graduation_year" type="text" name="graduation_year" placeholder="graduation_year" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="department" className="text-sm">department</label>
                            <input id="department" type="text" name="department" placeholder="department" className="w-full rounded-md text-center focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Adipisci fuga autem eum!</p>
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

export default AddAlumni;