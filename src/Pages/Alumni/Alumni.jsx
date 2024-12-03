import { useEffect, useState } from "react";
import AlumniCard from "./AlumniCard";
import useInfo from "../../Hooks/useInfo";


const Alumni = () => {
    const [info] = useInfo();

    // const [info, setInfo]= useState([]);

    // useEffect( ()=>{
    //     fetch('info.json')
    //     .then(res => res.json())
    //     .then(data =>setInfo(data) )


    // },[])
    // console.log(info);


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mr-4 ml-4 mb-4">
            {info.map(item => <AlumniCard key ={item.nsu_id} item ={item}>

            </AlumniCard>)}
            
        </div>
    );
};

export default Alumni;