var vm = new Vue({
  el: '#ex4',
  data: { buffer: '' },
  watch: {
    buffer: function() {
      if(this.buffer.length >= 5) {
        this.buffer = '';
      }
    },
  },
  template: `<div>
  <h3>Problema 4</h3>
  <input v-model="buffer">
  </div>`,
});
