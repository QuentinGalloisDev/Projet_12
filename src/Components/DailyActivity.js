import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getUserActivity } from "../Service/FetchData";
import { getDayForChart } from '../Utils/DateInNum'

const DailyActivity = () => {

    const [userActivity, setUserActivity] = useState(null);
    const [userActivityForChart, setUserActivityForChart] = useState([]);

    useEffect(() => {
        // Utilisez useEffect pour charger les données de l'utilisateur au montage du composant
        const fetchDataPerf = async () => {
            try {
                const res = await getUserActivity(process.env.REACT_APP_ID_USER); // Récupère les données de l'utilisateur
                setUserActivity(res.data.sessions); // Met à jour l'état avec les données récupérées
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
            }
        };

        fetchDataPerf(); // Appel de la fonction fetchData
    }, []);

    // Formattage
    useEffect(() => {
        if (userActivity) {
            let activityForChart = getDayForChart(userActivity)
            // Fonction
            setUserActivityForChart(activityForChart);
        }
    }, [userActivity]);
    // Formattage
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
        <div className='dailyActivityChart' style={{ backgroundColor: "#FBFBFB", borderRadius: '10px' }}>
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width="90%" height="100%" >
                <BarChart
                    width={900}
                    height={300}
                    data={userActivityForChart}
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

DailyActivity.prototype = {
    userActivity: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
    })),
    userActivityForChart: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
    }))
}
