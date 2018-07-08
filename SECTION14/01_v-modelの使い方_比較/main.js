new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  },
  methods: {
    handler: function(event) {
      this.message = event.target.value
    }
  }
})