import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { perfChart } from "../Utils/PerfForChart";
import { getUserPerformance } from "../Service/FetchData";
// Mettre en props les données récupérées dans les service et importer les données recupérées dans les service dans le app et les mettre dans les composant.

// importer durée des sessions et jour
// Je dois faire une boucle dans data qui est dans userPerformance et créer un tableau qui transforme les chiffres dans 
// kind en la string qui correspond dans userPermormance.kind


const Performance = () => {

    // const userPerformance = await getUserPerformance(12);
    // console.log(userPerformance);
    const [userperf, setUserPerf] = useState(null);
    const [userPerformanceForChart, setUserPerformanceForChart] = useState([]);

    useEffect(() => {
        // Utilisez useEffect pour charger les données de l'utilisateur au montage du composant
        const fetchDataPerf = async () => {
            try {
                const res = await getUserPerformance(12); // Récupère les données de l'utilisateur
                setUserPerf(res); // Met à jour l'état avec les données récupérées

            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
            }
            if (userperf) {

                // Fonction
                let user1Data = userperf.data.data;
                let typeOfSport = userperf.data.kind;
                let performanceForChart = user1Data.map((perf) => {
                    const perfForChart = {};
                    perfForChart["kind"] = typeOfSport[perf.kind];
                    perfForChart["value"] = perf.value;
                    return perfForChart;
                });
                // Fonction
                setUserPerformanceForChart(performanceForChart);
            }
        };

        fetchDataPerf(); // Appel de la fonction fetchData
    }, []);

    // formattage
    useEffect(() => {
        if (userperf) {
            let performanceForChart = perfChart(userperf)
            // Fonction
            setUserPerformanceForChart(performanceForChart);
        }
    }, [userperf]);
    // formattage

    return (
        <div className='performance'>
            {userperf && (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius={60} data={userPerformanceForChart} style={{ backgroundColor: '#282D30', borderRadius: '10px' }}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis dataKey="kind" />
                        <Radar name="user_1" dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}

Performance.propTypes = {
    userperf: PropTypes.shape({
        data: PropTypes.shape({
            kind: PropTypes.object.isRequired,
            data: PropTypes.arrayOf(PropTypes.shape({
                kind: PropTypes.string.isRequired,
                value: PropTypes.number.isRequired
            })).isRequired
        }).isRequired
    }),
    userPerformanceForChart: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    }))
}

export default Performance