new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
  },
  methods: {
    handleInput: function (event) {
      // 代入前に何か処理を行う…
      alert("次の文字列をDOMに反映しますか？" + event.target.value)
      this.message = event.target.value
    }
  }
})