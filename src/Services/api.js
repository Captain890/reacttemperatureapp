export const getTemp = (search) =>{
    return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}
                 &units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res => res.json());
};