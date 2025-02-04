import { useEffect, useState } from "react";

const useInfo = () => {



    const [info, setInfo] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/profile')
            .then(res => res.json())
            .then(data => {
                
                setInfo(data);
                setLoading(false);
            });


    }, [])
    return [info, loading]
}
export default useInfo;