import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { USER_PERFORMANCE } from '../data'
import PerformanceService from '../Service/Performance';
// Mettre en props les données récupérées dans les service et importer les données recupérées dans les service dans le app et les mettre dans les composant.

// importer durée des sessions et jour
// Je dois faire une boucle dans data qui est dans userPerformance et créer un tableau qui transforme les chiffres dans 
// kind en la string qui correspond dans userPermormance.kind


const Performance = () => {

    let user1Data = USER_PERFORMANCE[0].data
    let typeOfSport = USER_PERFORMANCE[0].kind
    // console.log(user1Data)
    // console.log(typeOfSport)
    let userPerformanceForChart = user1Data.map((perf) => {
        const perfForChart = {};
        perfForChart["kind"] = typeOfSport[perf.kind]
        perfForChart["value"] = perf.value
        return perfForChart
    })

    // console.log(userPerformanceForChart)
    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius={60} data={PerformanceService()} style={{ backgroundColor: '#282D30' }}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar name="user_1" dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Performance