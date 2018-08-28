
// pakai fullpage.js, harus dilakukan di document.ready
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: '.sepatah-kata',
        scrollOverflow: true
    });

});

// chart member sekolah coding
var ctx1 = document.getElementById("myChart");
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        //labels: ["Jul '15", "Jan '16", "Jul '16", "Jan '17", "Jul '17", "Now"],
        labels: ["7-2015","8-2015","9-2015","10-2015","11-2015","12-2015","1-2016","2-2016","3-2016","4-2016","5-2016","6-2016","7-2016","8-2016","9-2016","10-2016","11-2016","12-2016","1-2017","2-2017","3-2017","4-2017","5-2017","6-2017","7-2017","8-2017","9-2017","10-2017","11-2017"],
        datasets: [{
            label: 'member baru setiap bulannya',
          //  data: [797, 8934, 17789, 27389, 38744, 50000],
            data: [797, 487, 562, 2442, 2245, 1063, 1338, 1998, 1458, 1672, 1387, 1165, 1175, 1669, 1519, 1970, 1704, 1410, 1328, 1341, 1603, 1744, 1731, 2130, 2806, 3149, 3313, 3567 ],
            backgroundColor: 'rgba(244, 217, 66, 0)',
            borderColor: 'rgba(244, 217, 66, 1)',
            borderWidth: 4
        }]
    },
    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 20
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false ,
                    color: "#FFFFFF"
                },
                ticks: {
                    beginAtZero:true,
                    fontColor: "white",
                    fontSize: 20
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false ,
                    color: "#FFFFFF"
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 20
                }
            }]
        }
    }
});

// chart simplified for mobile
var ctx2 = document.getElementById("myChartMobile");
var myMobileChart = new Chart(ctx2, {
    type: 'line',
    data: {
        //labels: ["Jul '15", "Jan '16", "Jul '16", "Jan '17", "Jul '17", "Now"],
        labels: ["Q3 2015","Q4 2015","Q1 2016","Q2 2016","Q3 2016","Q4 2016","Q1 2017","Q2 2017","Q3 2017"],
        datasets: [{
            label: 'Member Baru Sekolahkoding',
          //  data: [797, 8934, 17789, 27389, 38744, 50000],
            data: [1846, 5750, 4794, 4224, 4363, 5084, 4272, 5605, 9268],
            backgroundColor: 'rgba(244, 217, 66, 0)',
            borderColor: 'rgba(244, 217, 66, 1)',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false ,
                    color: "#FFFFFF"
                },
                ticks: {
                    beginAtZero:true,
                    fontColor: "white",
                    fontSize: 12
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false ,
                    color: "#FFFFFF"
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 10
                }
            }]
        }
    }
});