import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && <p>City: {this.props.city}</p>}
                {this.props.country && <p>Country: {this.props.country}</p>}
                {this.props.temperature && <p>Temparature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather;
