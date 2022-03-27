import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Footer() {
    const [temp, setTemp] = useState('');
    const API_KEY = 'API_KEY_HERE...';
    let lat = 32.085300;
    let lon = 34.781769;
    
    const successCallback = (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    }
    
    const errorCallback = (error) => {
        console.log(error);
    }
    
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(res => {
            const tempFromAPI = res.data.main.temp - 273.15;
            setTemp(parseInt(tempFromAPI));
        })
        .catch(err => console.log(err));
    }, [lat, lon]);

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    
    return <footer>
        <h3 className='temp'>{temp}</h3>
    </footer> 
}
