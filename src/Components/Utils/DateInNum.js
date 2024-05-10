export const getDayForChart = (activity) => {
    let userActivityMocked = activity
    // console.log(userActivityMocked)
    let sessionsTab = userActivityMocked.map((session) => {
        return {
            day: new Date(session.day).getDay() + 1,
            calories: session.calories,
            kilogram: session.kilogram,
        };
    });
    sessionsTab.sort((a, b) => { return a.day - b.day })
    return sessionsTab
}