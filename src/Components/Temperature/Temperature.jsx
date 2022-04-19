import React, { useState, useEffect } from 'react';
import { getTemp } from '../../Services/api';
import '../Css/style.css';

const Temperature = () => {
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState('Faridabad');
    
    useEffect(() => {
        getTemp(search)
        .then((resData) => {
            setCity(resData.main)
        })
    },[search]);
    
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type='search'
                        className='inputField'
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>
                {!city && (<p className='errorMsg'>No data Found</p>)}
                {city && (
                    <>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max">
                                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                            </h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </>
                )} 
                   
                
            </div>    
        </>
    )
}

export default Temperature;
