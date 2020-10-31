import React from 'react'
import {Line} from 'react-chartjs-2'
import { useSales } from '../../../Data/SalesData/salesdata';


function SecondSectionHome(){
   let {data} = useSales()
   let len = data.length

    const datas = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', "Augst", "Sept", "Oct"],
        datasets: [
            {
                label: 'Sales Chart',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, len]
            }
        ]
    };

    return(
        <div>
            <div className="header flex space-btw align-item">
                <div><h3>Summary</h3></div>
                <div></div>
            </div><hr />
            <Line data={datas} 
                options={{ 
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }}
             />
        </div>
    )
}

export default SecondSectionHome