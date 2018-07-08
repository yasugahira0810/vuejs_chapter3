new Vue({
  el: '#app',
  data: {
    item: 'Hello!!!'
  },
  methods: {
    handleClick: function (event, item) {
      if (event) event.preventDefault()
      alert(item)
    }
  }
})