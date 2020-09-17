import React, { useState } from 'react';
import { VictoryChart, VictoryLine, VictoryBar, VictoryAxis, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryScatter } from 'victory';

function Weather() {
    const today = new Date();
    const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();

    const initWeather = [];
    const [weather, setWeather] = useState(initWeather);

    fetch('https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==')
        .then(response => response.json())
        .then(json => setWeather([...json]));

    const rows = () => weather.slice(0, 24).reverse().map(temphum => {
        const measurementDate = temphum.PublishedAt.split('T')[0].split('-')[2] + "." + temphum.PublishedAt.
            split('T')[0].split('-')[1] + "." + temphum.PublishedAt.split('T')[0].split('-')[0]
        const measurementTime = temphum.PublishedAt.split('T')[1].split(':')[0] + ":" + temphum.PublishedAt.
            split('T')[1].split(':')[1]
        return <div><b>Pvm. </b>{measurementDate}, <b>klo: </b>{measurementTime} <b>Ilmankosteus </b>
            {temphum.Hum.split('.')[0]}% <b>Lämpötila </b>{temphum.Temp.split('.')[0]}°C</div>
    })

    return (
        <div align="center">
            <div>
                <h3>Piirettävän chartin data</h3>
            </div>
            <div>
                <b>Tänään on: {date}</b>
            </div>
            <div>
                {rows()}
            </div>
            <h2>Lämpötila</h2>


        </div>
    )
}

export default Weather