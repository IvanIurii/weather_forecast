import React from "react"

const Weather = props => (
    <div>
        {props.city &&
        <div>
            <br/>
            <h4>Погода на сегодня:</h4><br/>
            <p>Местоположение: {props.city} {props.country} </p>
            <p>Максимальная температура: {props.temp_max} &#8451;</p>
            <p>Минимальная температура: {props.temp_min} &#8451;</p>
            <p>Давление: {props.pressure} </p>
            <p>Влажность: {props.humidity} </p>
            <p>Заход солнца: {props.sunset} </p>
        </div>
        }
        <p className="error">{props.error}</p>
    </div>);


export default Weather
