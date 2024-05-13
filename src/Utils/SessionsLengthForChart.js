import { dayInLetter } from "./DayInLetter";

export const sessionsChart = (sessionsUser) => {
    let averageSessionsForChart = sessionsUser.map((averageSession) => {
        return {
            day: dayInLetter(averageSession.day),
            sessionLength: averageSession.sessionLength
        }


    })
    return averageSessionsForChart
}