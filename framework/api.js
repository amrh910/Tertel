import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFindMovie = (movie) => {
    const [ resp, setResp ] = useState();

    useEffect(() => {
        axios.get('https://tertel.amrhammam.com/api/main?query=' + movie).then((response) => {
            setResp(response.data);
        });
    }, []);

    if(resp) return resp;
}