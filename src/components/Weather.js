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

    let humtempkey = 1;
    let chartTempData = [];
    let chartHumData = [];
    const rows = () => weather.slice(0, 24).reverse().map(temphum => {
        const measurementDate = temphum.PublishedAt.split('T')[0].split('-')[2] + "." + temphum.PublishedAt.split('T')[0].split('-')[1] + "." + temphum.PublishedAt.split('T')[0].split('-')[0]
        const measurementTime = temphum.PublishedAt.split('T')[1].split(':')[0] + ":" + temphum.PublishedAt.split('T')[1].split(':')[1]
        chartTempData.push({ x: String(measurementTime), y: parseInt(temphum.Temp) });
        chartHumData.push({ experiment: String(measurementTime), actual: parseInt(temphum.Hum), label: String(temphum.Hum.split(".")[0]) + "%" });
        return <div key={humtempkey++}><b>Pvm. </b>{measurementDate}, <b>klo: </b>{measurementTime} <b>Ilmankosteus </b>{temphum.Hum.split('.')[0]}% <b>Lämpötila </b>{temphum.Temp.split('.')[0]}°C</div>
    })
    console.log(chartTempData);
    const showTemperature = chartTempData;
    const showHumidity = chartHumData;

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

            <VictoryChart domainPadding={{ x: 30, y: 5 }} width={1000} height={250}
                containerComponent={<VictoryVoronoiContainer />}
            >
                <VictoryGroup
                    color="#db1407"
                    labels={({ datum }) => `${datum.y} °C`}
                    labelComponent={
                        <VictoryTooltip
                            style={{ fontSize: 10 }}
                        />
                    }
                    data={showTemperature}
                >
                    <VictoryLine 
                    style={{
                        data:
                            { strokeWidth: 3 }
                    }}
                    />
                    <VictoryScatter
                        color= "black"
                        size={({ active }) => active ? 8 : 3}
                    />
                </VictoryGroup>
            </VictoryChart>
            <hr />
            <h2>Ilmankosteus</h2>
            <VictoryChart domainPadding={{ x: 30, y: 5 }}
                width={1000}
                height={250}>
                <VictoryBar
                    style={{ data: { fill: "#6495ED" }, labels: { fontSize: 10 } }}
                    data={showHumidity}
                    x="experiment"
                    y="actual"
                />
                <VictoryAxis
                    style={{
                        axisLabel: { padding: 30 }
                    }}
                />
                <VictoryAxis dependentAxis
                    style={{
                        axisLabel: { padding: 40 }
                    }}
                />
            </VictoryChart>
        </div>
    )
}

export default Weather