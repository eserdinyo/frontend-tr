import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2';
import { getCityCount, getTechCount } from '../utils';

function Statistic() {
    const [frameWorks, setFrameWorks] = useState({
        labels: ['React', 'Angular', 'Vue'],
        datasets: [{
            data: [
                getTechCount('React'),
                getTechCount('Angular'),
                getTechCount('Vue')
            ],
            backgroundColor: [
                '#47D8FF',
                '#DD0330',
                '#41B883',
            ]
        }]
    })

    const [cities, setCities] = useState({
        labels: ['İstanbul', 'İzmir', 'Ankara'],
        datasets: [{
            data: [
                getCityCount('İstanbul'),
                getCityCount('İzmir'),
                getCityCount('Ankara')
            ],
            backgroundColor: [
                '#c0392b',
                '#2980b9',
                '#8e44ad'
            ]
        }]
    })

    return (
        <div className="container pt-5">
            <div className="d-md-flex justify-content-between">
                <div className="mx-auto darkmode-ignore" style={{ width: '300px' }}>
                    <Pie
                        data={frameWorks}
                        width={100}
                        options={{
                            title: {
                                display: true,
                                fontSize: 16,
                                text: 'Şirketlerin Framework Kullanımı',
                            }
                        }}
                    />
                </div>
                <div className="mx-auto darkmode-ignore" style={{ width: '300px' }}>

                    <Pie
                        data={cities}
                        width={100}
                        options={{
                            title: {
                                display: true,
                                fontSize: 16,
                                text: 'Şirketlerin Şehirlere Göre Dağılımı',
                            }
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default Statistic;