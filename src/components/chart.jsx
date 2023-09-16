import React from 'react';
import { Box } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import "../styles/components/chart.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
const Chart = (props) => {

    return (


        <Box boxShadow={2} marginTop={3} borderRadius={3} padding={1} width="95%">
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={600}
                    height={200}
                    data={props.data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >

                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend iconSize={20} iconType='square' verticalAlign="top" height={12} />
                    <XAxis dataKey="name" />
                    <YAxis label={{
                        // value: 'Utilization %', angle: '-90', position: 'Insideleft'
                    }} />
                    <Tooltip />
                    <Area type="monotone" dataKey={props.name} stroke={props.color} fill={props.color} />
                </AreaChart>
            </ResponsiveContainer></Box>

    )
}

export default Chart