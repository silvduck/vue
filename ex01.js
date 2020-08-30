var vm = new Vue({
  el: '#ex1',
  data: { counter: 0 },
  template: `<div>
  <h3>Problema 1</h3>
  {{counter}}
  </div>`,
});

setInterval(() => vm.counter++, 100);
