var vm = new Vue({
  el: '#ex6',
  data: { color: '' },
  template: `<div>
  <h3>Problema 6</h3>
  <div v-bind:style="'color: hsl(0,' +color + '%,50%)'">AM I RED?</div>
  <input type="range" min="1" max="100" v-model="color"> {{color}}
  <div v-if="color >= 70">YES!</div>
  </div>`,
});
