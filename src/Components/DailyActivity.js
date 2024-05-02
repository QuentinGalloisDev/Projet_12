import React from 'react'
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_ACTIVITY } from '../data'
import DailyActivityService from '../Service/DailyActivity';

const DailyActivity = () => {

    let userActivityMocked = USER_ACTIVITY[0].sessions
    // console.log(userActivityMocked)
    let sessionsTab = userActivityMocked.map((session) => {
        return {
            day: new Date(session.day).getDay() + 1,
            calories: session.calories,
            kilogram: session.kilogram,
        };
    });
    sessionsTab.sort((a, b) => { return a.day - b.day })
    // console.log(userActivityMocked)
    // Personnalisation du tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: "#E60000", color: "#ffffff", padding: '2px', fontSize: '11px', textAlign: 'center' }}>
                    <p className="label">{`${payload[0].value} kg`}</p>
                    <p className="label">{`${payload[1].value} calories`}</p>
                </div>
            );
        }

        return null;
    };



    return (

        <div className='dailyActivityChart' style={{ backgroundColor: "#FBFBFB" }}>
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width="90%" height="100%" >
                <BarChart
                    width={900}
                    height={300}
                    data={DailyActivityService()}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barGap={8}

                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey='day'
                        tickLine={false}

                    />
                    <YAxis orientation="right" yAxisId="right" domain={[75, 83]} tickCount={3} strokeWidth={0} />
                    <YAxis orientation="left" dataKey="calories" yAxisId="left" hide={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend

                        align='right'
                        height={65}
                        layout="horizontal"
                        verticalAlign="top"
                        iconType='circle'
                        iconSize={9} />
                    <Legend

                        align='left'
                        layout="horizontal"
                        verticalAlign="top" />
                    <Bar name={<span style={{ color: '#74798C' }}>Poids (kg)</span>} dataKey="kilogram" yAxisId="right" fill="#282D30" radius={[20, 20, 0, 0]} barSize={10}

                    />
                    <Bar name={<span style={{ color: '#74798C' }}>Calories brûlées (kCal)</span>} dataKey="calories" yAxisId="left" fill="#E60000" radius={[20, 20, 0, 0]} barSize={10}
                    />

                </BarChart>
            </ResponsiveContainer>
        </div>

    )

}
export default DailyActivity


// DailyActivity.prototype = {
//     // Mettre required à l'id
//     id: PropTypes.number,
// }



// let findweightMin = sessionsTab.map((weight) => {
//     const weights = {}
//     weights['weight'] = weight.kilogram
//     return weights.weight
// })
// let weightSort = findweightMin.sort()

// const uniqueWeight = [...new Set(weightSort)]

// console.log(uniqueWeight)