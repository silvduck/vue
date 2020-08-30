var vm = new Vue({
  el: '#ex5',
  data: { color: '' },
  template: `<div>
  <h3>Problema 5</h3>
  <input
    v-bind:style = "color"
    v-on:keydown = "color='background-color: red' "
    v-on:keyup = "color='' ">
  </div>`,
});
