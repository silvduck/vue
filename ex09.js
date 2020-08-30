var vm = new Vue({
  el: '#ex9',
  data: { state: 0 },
  methods: {
    colors: function() {
      (this.state < 2)? this.state++ : this.state = 0;
    }
  },
  template: `<div style="display: inline-block; width:30px;">
  <h3>Problema 9</h3>
  <div v-if="state == 0  || state == 1" style="height: 30px; background-color: indianRed"></div>
  <div v-if="state == 2" style="height: 30px; background-color: red"></div>
  <div v-if="state == 0  || state == 2" style="height: 30px; background-color: khaki"></div>
  <div v-if="state == 1" style="height: 30px; background-color: yellow"></div>
  <div v-if="state == 0" style="height: 30px; background-color: lawngreen"></div>
  <div v-if="state == 1  || state == 2" style="height: 30px; background-color: seagreen"></div>
  <button v-on:click="colors()">Switch</button>
  {{state}}
  </div>`,
});
