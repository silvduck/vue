Vue.component('switch-button', {
  data: function() {
    return { enabled: true, }
  },
  methods: {
    switchState: function() {
      this.enabled =! this.enabled;
      this.$emit(this.enabled? 'off' : 'on');
    }
  },
  template: `<div style="border: solid; display: inline-block;">
  <button v-bind:disabled="! enabled" v-on:click="switchState()">ON</button>
  <button v-bind:disabled="enabled" v-on:click="switchState()">OFF</button>
  </div>`,
});

var vm = new Vue({
  el: '#ex13',
  data: { state: null },
  template: `<div>
  <h3>Problema 13</h3>
  <switch-button
  v-on:on="state='just turned on'"
  v-on:off="state='just turned off'">
  </switch-button><br/>{{state}}
  </div>`,
});
