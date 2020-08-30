var vm = new Vue({
  el: '#ex2',
  data: { a: 0, b:0 },
  methods: {
    add: function() {
      return parseFloat(this.a)+parseFloat(this.b);
    }
  },
  template: `<div>
  <h3>Problema 2</h3>
  <input v-model:value="a">
  <input v-model:value="b">
  {{add()}}
  </div>`,
});
