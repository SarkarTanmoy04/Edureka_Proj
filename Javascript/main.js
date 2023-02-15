google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Programming', 'Survery Ranking'],
    ['Javascript',     65.36],
    ['HTML/CSS',      55.08],
    ['SQL',  49.43],
    ['Python', 48.07],
    ['TypeScript',    34.83]
  ]);

  var options = {
    title: 'Programming Languages Usabililty on 2023',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}
