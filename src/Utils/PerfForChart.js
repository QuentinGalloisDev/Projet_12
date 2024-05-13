export const perfChart = (performanceUser) => {
    let user1Data = performanceUser.data.data;
    let typeOfSport = performanceUser.data.kind;
    let performanceForChart = user1Data.map((perf) => {
        const perfForChart = {};
        perfForChart["kind"] = typeOfSport[perf.kind];
        perfForChart["value"] = perf.value;
        return perfForChart;
    });
    return performanceForChart

}