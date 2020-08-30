var vm = new Vue({
  el: '#ex7',
  data: { a: false, b: false, c:false, d:false },
  watch: {
    a: function() {
      this.b = this.a;
    },
    b: function() {
      this.c = this.b;
    },
    c: function() {
      this.d = this.c;
    },
  },
  template: `<div>
  <h3>Problema 7</h3>
  <input type="checkbox" v-model="a"> {{a}} {{b}} {{c}} {{d}}
  </div>`,
});
