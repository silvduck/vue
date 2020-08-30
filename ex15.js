Vue.component('magic-input', {
  props: ['value'],
  data: function() {
    return { magicText: ''}
  },
  created: function() {
    this.magicText = this.value.replace(/./g, x => x.toUpperCase() == x ?
      x.toLowerCase() : x.toUpperCase());
    },
    watch: {
    value: function() {
      this.magicText = this.value.replace(/./g, x => x.toUpperCase() == x ?
        x.toLowerCase() : x.toUpperCase());
    },
    magicText: function() {
      this.$emit('input', this.magicText.replace(/./g, x => x.toUpperCase() == x ?
        x.toLowerCase() : x.toUpperCase()));
    }
  },
  template: `<input v-model="magicText">`,
});

var vm = new Vue({
  el: '#ex15',
  data: { text: "Hola" },
  template: `<div>
  <h3>Problema 15</h3>
  <magic-input v-model="text"></magic-input>
  <input v-model="text">
  {{text}}
  </div>`,
});
