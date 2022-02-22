new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
    labels: [['향미','Flavor','3.0'], ['신맛','Acidity','1.0'], ['쓴맛','Bitter','2.5'], ['후미','Aftertaste','3.0'], ['무게감','Body','3.5'], ['단맛','Sweetness','3.0']],
    datasets: [
      {
        label: "1950",
        fill: true,
        backgroundColor: "rgba(94,70,56,0.2)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(94,70,56,1)",
        data: [3.0, 1.0, 2.5, 3.0, 3.5, 3.0]
      }
    ]
  },
  options: {
    scales: {
        r: {
            suggestedMin: 0,
            suggestedMax: 5
        }
    }
},
  options: {
    title: {
      display: true,
      text: 'Distribution in % of world population'
    }
  }
});