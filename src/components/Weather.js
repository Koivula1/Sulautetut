import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';


function Weather() {
    return (
        <div>
        <VictoryChart
            domainPadding={{ x: 30, y: 10 }}
            width={1000}
            height={250}>
            <VictoryLine
                data={[
                    { experiment: "1.1.", actual: -10 },
                    { experiment: "2.1.", actual: 15 },
                    { experiment: "3.1.", actual: 0 },
                    { experiment: "4.1.", actual: 1 },
                    { experiment: "5.1.", actual: 2 },
                    { experiment: "6.1.", actual: 3 }
                ]}
                style={{
                    data:
                        { stroke: "green", strokeWidth: 1 }
                }}
                x="expreriment"
                y="actual"
            />

        </VictoryChart>
        </div>
        
    )
}

export default Weather