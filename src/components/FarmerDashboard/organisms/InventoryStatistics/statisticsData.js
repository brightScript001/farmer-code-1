// doughnutChartData.js
export const doughnutData = {
    labels: ["Planting", "Harvesting"],
    datasets: [
        {
            data: [67, 33],
            backgroundColor: ["#FFCE56", "#36A2EB"],
            hoverBackgroundColor: ["#FFCE56", "#36A2EB"],
        },
    ],
};

export const doughnutOptions = {
    maintainAspectRatio: false,
    responsive: false,
    cutoutPercentage: 70,
    plugins: {
        legend: {
            display: false,
        },
    },
};

// lineChartData.js
export const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Fertilizer",
            borderColor: "#FF6384",
            backgroundColor: "#FF6384",
            fill: false,
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        },
        {
            label: "Manure",
            borderColor: "#36A2EB",
            backgroundColor: "#36A2EB",
            fill: false,
            data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        },
        {
            label: "Pesticide",
            borderColor: "#FFCE56",
            backgroundColor: "#FFCE56",
            fill: false,
            data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        },
        {
            label: "Herbicides",
            borderColor: "#4BC0C0",
            backgroundColor: "#4BC0C0",
            fill: false,
            data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
        },
    ],
};

export const lineOptions = {
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
            labels: {
                usePointStyle: true, // This will use circles instead of rectangles
                pointStyle: 'circle', // Specifically set the point style to circle
            },
        },
    },
};
