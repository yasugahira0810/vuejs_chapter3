var test = new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    handler: function(event) {
      this.message = event.target.value
      console.log(this.message)
    }
  }
})