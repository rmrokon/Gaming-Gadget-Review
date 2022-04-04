import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [graphData, setGraphData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGraphData(data));
    }, [])
    return (
        <div className='grid grid-cols-2 gap-11 place-items-center py-10'>
            <div>
                <p className='text-center text-blue-600 font-bold'>Month Wise Sell</p>
                <LineChart width={600} height={400} data={graphData}>
                    <Line type='monotone' dataKey='sell' stroke='#8884d8'></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <CartesianGrid stroke='#ccc' strokeDasharray={'5, 5'}></CartesianGrid>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </div>
            <div>
                <p className='text-center text-blue-600 font-bold'>Revenue Vs Investment</p>
                <AreaChart width={600} height={400} data={graphData}>
                    <Area dataKey={'revenue'} stackId='1' stroke="#ffc658" fill="#ffc658"></Area>
                    <Area dataKey={'investment'} stackId='1' stroke="#82ca9d" fill="#82ca9d"></Area>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </AreaChart>
            </div>
            <div>
                <p className='text-center text-blue-600 font-bold'>Revenue Vs Investment</p>
                <BarChart width={600} height={400} data={graphData}>
                    <Bar dataKey={'revenue'} stackId='a' fill="#82ca9d"></Bar>
                    <Bar dataKey={'investment'} stackId='a' fill="#8884d8"></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
            <div>
                <p className='text-center text-blue-600 font-bold'>Revenue Vs Investment</p>
                <PieChart width={600} height={400}>
                    <Pie data={graphData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={graphData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label isAnimationActive={true} />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;