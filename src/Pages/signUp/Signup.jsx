import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm();

    const { createUser,updateUserProfile } = useContext(AuthContext);

    const onSubmit = (data) => {

        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.username, data.photo)
                    .then(() => {
                        // console.log('user profile info updated');
                        const userInfo = {
                            name: data.username,
                            email: data.email,
                            role: data.role
                        }
                        axiosPublic.post('/user', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to database');
                                    reset();
                                    Swal.fire({
                                        title: "User created  Successfully",
                                        showClass: {
                                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                                        },
                                        hideClass: {
                                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                                        }
                                    });
                                    navigate('/');

                                }
                            })

                    })
            })

    }


    return (
        <div className="w-full pt-24 mx-auto mt-10 mb-10 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <Helmet>
                <title>
                    sign Up
                </title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">

                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">user name</label>
                    <input type="username"   {...register("name")} name="name" id="name" placeholder="user-name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-teal-600" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                    <input type="email"  {...register("email", { required: true })} name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-teal-600" />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"  {...register("password", { required: true, minLength: 6, maxLength: 20 })} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-teal-600" />
                    {errors.password && <span>This field is required</span>}
                    <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <input type="submit" className="submit block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-teal-600" value="Sign Up" />

            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                <Link to='/login' className="underline dark:text-gray-800">Login</Link>
            </p>


        </div>
    );
};

export default Signup;