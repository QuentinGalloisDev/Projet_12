import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

import { USER_MAIN_DATA } from '../data'

const Score = ({ user }) => {

    return (

        <div className='score' style={{ backgroundColor: "#FBFBFB" }}>
            {user && (
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        // startAngle et endAngle définissent les angles de début et de fin du secteur où les barres radiales sont affichées. 
                        // Dans cet exemple, startAngle est défini à 180 degrés et endAngle à -270 degrés, 
                        // ce qui signifie que les barres radiales sont affichées dans un secteur couvrant un arc de cercle entre 180 degrés et 90 degrés en sens anti-horaire.
                        // Cela laisse une partie du cercle non remplie par les barres radiales.
                        startAngle={180}
                        endAngle={-270}
                        innerRadius={90}
                        outerRadius={70}
                        barSize={10}
                        data={user}
                    >
                        {/* afficher les valeurs des angles sur le graphique. Dans ce cas, il est configuré en tant qu'axe numérique (type="number") avec un domaine de 0 à 125 degrés. */}
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 125]}
                            angleAxisId={0}
                            tick={false}
                        />
                        {/* afficher les données provenant de la clé "todayScore" des données fournies. 
                    L'axe des angles utilisé est spécifié via angleAxisId. */}
                        <RadialBar
                            fill="#FF0000"
                            background
                            dataKey={user.todayScore ? "todayScore" : "score"}
                            angleAxisId={0}
                            data={[user]}
                        />
                        <Legend iconSize={10}
                            content={() =>
                            (
                                <p className='legend_text' style={{ fontWeight: "700px", fontSize: "26px" }}>{user.todayScore ? user.todayScore : user.score}%
                                    <span className='legend_goal' style={{ fontWeight: "500px", fontSize: "16px", color: "#74798C" }}> de votre objectif</span> </p>
                            )
                            }
                            align='center'
                            layout="vertical"
                            verticalAlign="middle"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}

export default Score