var vm = new Vue({
  el: '#app',
  data: {
    predictionPercentageThreshold: 20,
    daysNotSprayedThreshold: 200,
    spray: '',
  },
  mounted() {
    this.response = axios
      .get(
        'https://vineyard-flask.herokuapp.com/spray?predictionPercentageThreshold=20&daysNotSprayedThreshold=200',
      )
      .then(response => {
        this.spray = response['data'];
      });
  },
});
