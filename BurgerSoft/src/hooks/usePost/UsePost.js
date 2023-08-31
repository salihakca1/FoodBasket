import { useState } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux'; // Redux store'dan state almak için

function usePost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const token = useSelector(state => state.user.token); // Redux store'dan token alınması

    const post = async (url, apiData) => {
        try {
            setLoading(true);

            const config = {
                headers: {}
            };

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.post(url, apiData, config);

            setData(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    return { data, loading, error, post };
}

export default usePost;