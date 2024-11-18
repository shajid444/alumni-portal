import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useAdmin = () => {

    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosPublic();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({

        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user.email}`);
            console.log(res.data.admin);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;