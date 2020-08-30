var vm = new Vue({
  el: '#ex3',
  data: { count: 0 },
  template: `<div>
  <h3>Problema 3</h3>
  <button v-if="count == 0" v-on:click="count++">click me!</button>
  </div>`,
});
