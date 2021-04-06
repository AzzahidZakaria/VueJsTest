var app = new Vue({
    el: "#app",
    data () {
        return {
          info: null
        }
      },
      mounted () {
        axios
          .get('http://localhost:8001/api/user')
          .then(response => (this.info = response))
      }
    })
