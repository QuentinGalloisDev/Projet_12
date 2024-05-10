import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../data'
import { getUserAverageSessions } from "../Service/FetchData";
import { dayInLetter } from './Utils/DayInLetter'
const SessionLength = () => {
    const [userSessions, setUserSessions] = useState(null);
    const [userSessionsForChart, setUserSessionsForChart] = useState([]);

    useEffect(() => {
        // Utilisez useEffect pour charger les données de l'utilisateur au montage du composant
        const fetchDataPerf = async () => {
            try {
                const res = await getUserAverageSessions(12); // Récupère les données de l'utilisateur
                setUserSessions(res.data.sessions); // Met à jour l'état avec les données récupérées
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
            }
        };
        fetchDataPerf(); // Appel de la fonction fetchData
    }, []);

    // formattage
    useEffect(() => {
        if (userSessions) {
            let averageSessionsForChart = userSessions.map((averageSession) => {
                return {
                    day: dayInLetter(averageSession.day),
                    sessionLength: averageSession.sessionLength
                }
                // formattage
            })
            setUserSessionsForChart(averageSessionsForChart)
        }
    }, [userSessions]);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (

                <div className="custom-tooltip" style={{ backgroundColor: "#FFFFFF", padding: "2px" }}>
                    <p className="time">{`${payload[0].value} min`}</p>
                </div>

            );
        }
        return null;
    };

    const CustomLegendContent = ({ payload }) => {
        return (
            <div className="custom-legend" style={{ color: "#FFFFFF" }}>
                <p>
                    Durée moyenne des sessions
                </p>
            </div>
        );
    };
    /* Partie droite plus sombre*/
    function CustomizedCursor({ points }) {
        return <Rectangle fill="black" opacity={0.1} x={points[1].x} width={500} height={300} />;
    }

    return (
        <div className='sessionLength'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={300}
                    height={100}
                    data={userSessionsForChart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    style={{ backgroundColor: '#FF0000', borderRadius: '10px' }}
                >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF' }} />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />} />
                    <Legend content={<CustomLegendContent />} align='left' verticalAlign='top' wrapperStyle={{ color: '', fontSize: '21px' }} />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />


                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SessionLength