import React from "react"


class ComingDays extends React.Component {

    state = {
        data_all: undefined
    }


    gettingWeatherComingDays = async (event) => {
        event.preventDefault();

        {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=${this.props.api_key}`);
            if (api_url.status === 200) {
                const data = await api_url.json();
                this.setState({
                        data_all: data.list
                    }
                )

            }
        }
    }

    render() {
        return (<div>
                {this.props.city &&
                <form onClick={this.gettingWeatherComingDays}>
                    <button> Получить погоду на ближайщие дни</button>
                </form>
                }
            </div>

        );
    }
}

export default ComingDays

