import React, { useState } from 'react';
import { VictoryChart, VictoryLine, VictoryBar, VictoryAxis, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryScatter } from 'victory';
//https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==

function Weather() {
    const today = new Date();
    const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();

    const initWeather = [];
    const [weather, setWeather] = useState(initWeather);

    fetch('https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==')
        .then(response => response.json())
        .then(json => setWeather([...json]));

    const rows = () => weather.slice(0, 24).reverse().map(temphum => {
        return <div>{temphum.PublishedAt} ------<b>Ilmankosteus</b> {temphum.Hum.split('.')[0]}% <b>Lämpötila</b> {temphum.Temp.split('.')[0]}</div>
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

            <VictoryChart domainPadding={{ x: 30, y: 5 }} width={1000} height={250}
                containerComponent={<VictoryVoronoiContainer />}
            >
                /*<VictoryGroup
                    color="#c43a31"
                    labels={({ datum }) => `${datum.y} C`}
                    labelComponent={
                        <VictoryTooltip
                            style={{ fontSize: 10 }}
                        />
                    }
                    data={showTemperature}
                    ></VictoryGroup>
                        <VictoryScatter
                            size={({ active })} => active ? 8 :3}
                            />
                <VictoryLine
                    data={[
                    { x: "1.1.", actual: 0 },
                    { x: "2.1.", actual: 5 },
                    { x: "3.1.", actual: 0 },
                    { x: "4.1.", actual: 1 },
                    { x: "5.1.", actual: 2 },
                    { x: "6.1.", actual: 3 },
                    { x: "7.1.", actual: 1 },
                    { x: "8.1.", actual: 2 },
                    { x: "9.1.", actual: 2 },
                    { x: "10.1.", actual: 1 },
                    { x: "11.1.", actual: 2 },
                    { x: "12.1.", actual: 3 },
                    { x: "13.1.", actual: 1 },
                    { x: "14.1.", actual: 2 },
                    { x: "15.1.", actual: 1 },
                    { x: "16.1.", actual: 2 }
                ]}*/
                    style={{
                    data:
                        { stroke: "red", strokeWidth: 4 }
                }}
                    x="expreriment"
                    y="actual"
                />

            </VictoryChart>*/
        </div>


    )
}

export default Weather