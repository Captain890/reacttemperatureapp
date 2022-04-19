export const getTemp = (search) =>{
    return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}
                 &units=metric&appid=b5451be7e1d642a49e1e548cdf04428c`)
            .then(res => res.json());
};