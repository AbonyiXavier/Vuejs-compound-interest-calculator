new Vue({
  el: "#vue-app",
  data: {
    principal: 0,
    rate: 0,
    n: 0,
    time: 0
  },
  methods: {
    compoundInterest: function() {
      const result =
        this.principal *
        Math.pow(1 + this.rate / (this.n * 100), this.n * this.time);
      return result.toFixed(2);
    },
    reset() {
      this.principal = 0;
      this.rate = 0;
      this.n = 0;
      this.time = 0;
    }
  }
});
