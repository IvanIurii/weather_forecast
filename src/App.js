import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import ComingDays from "./components/ComingDays";

const API_KEY = "57d6f5c093ec2df9c9c750ea8d8e41e6";
const API_KEY1 = "10cbf4bcc314b17c78905c7e8ccd5fbe";

class App extends React.Component {

    state = {
        temp_max: undefined,
        temp_min: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        humidity:undefined,
        error: undefined,
    }


    gettingWeather = async (event) => {
        // Не обновлять страницу
        event.preventDefault();
        var city = event.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            if (api_url.status === 200) {
                const data = await api_url.json();

                var sunset = data.sys.sunset;
                var date = new Date();
                date.setTime(sunset);
                var sunset_date = date.getHours() + ":" + date.getMinutes() + ':' + date.getSeconds();

                this.setState({
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    sunset: sunset_date,
                    error: undefined
                });
            } else this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                humidity: undefined,
                error: "City name is not correct"
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <Info/>
                        </div>
                        <div className="col-sm-9">
                            <Form weatherMethod={this.gettingWeather}/>
                            <Weather
                                temp_max={this.state.temp_max}
                                temp_min={this.state.temp_min}
                                city={this.state.city}
                                country={this.state.country}
                                pressure={this.state.pressure}
                                sunset={this.state.sunset}
                                humidity={this.state.humidity}
                                error={this.state.error}
                            />
                            <ComingDays api_key={API_KEY1}
                                        city={this.state.city}

                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
