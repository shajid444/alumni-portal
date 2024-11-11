import { useEffect, useState } from "react";
import AlumniCard from "./AlumniCard";


const Alumni = () => {

    const [info, setInfo]= useState([]);

    useEffect( ()=>{
        fetch('info.json')
        .then(res => res.json())
        .then(data =>setInfo(data) )


    },[])
    // console.log(info);


    return (
        <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
            {info.map(item => <AlumniCard key ={item.nsu_id} item ={item}>

            </AlumniCard>)}
            
        </div>
    );
};

export default Alumni;