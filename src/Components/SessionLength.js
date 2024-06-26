import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import { getUserAverageSessions } from "../Service/FetchData";
import { sessionsChart } from "../Utils/SessionsLengthForChart";
import PropTypes from 'prop-types';
const SessionLength = () => {
    const [userSessions, setUserSessions] = useState(null);
    const [userSessionsForChart, setUserSessionsForChart] = useState([]);

    useEffect(() => {
        // Utilisez useEffect pour charger les données de l'utilisateur au montage du composant
        const fetchDataPerf = async () => {
            try {
                const res = await getUserAverageSessions(process.env.REACT_APP_ID_USER); // Récupère les données de l'utilisateur
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
            let averageSessionsForChart = sessionsChart(userSessions)
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

    const CustomLegendContent = () => {
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
SessionLength.propTypes = {
    userSessions: PropTypes.shape({
        data: PropTypes.shape({
            sessions: PropTypes.arrayOf(PropTypes.shape({
                day: PropTypes.string.isRequired,
                sessionLength: PropTypes.number.isRequired
            })).isRequired
        }).isRequired
    }),
    userSessionsForChart: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired
    }))
}

export default SessionLength