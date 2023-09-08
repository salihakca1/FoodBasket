import { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux'; 

function useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const token = useSelector(state => state.user.token); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const config = {
                headers: {}
            };

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.get(url, config);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return { error, loading, data };
}

export default useFetch;