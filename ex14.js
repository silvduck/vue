Vue.component('color-selector', {
  data: function() {
    return {
      new_color: "rgb(0, 0, 0)",
      red: 0,
      green: 0,
      blue: 0,
    }
  },
  watch: {
    red: function () {
      this.new_color = "rgb("+this.red+","+this.green+","+this.blue+")"
      this.$emit('color',this.new_color);
    },
    green: function () {
      this.new_color = "rgb("+this.red+","+this.green+","+this.blue+")"
      this.$emit('color',this.new_color);
    },
    blue: function () {
      this.new_color = "rgb("+this.red+","+this.green+","+this.blue+")"
      this.$emit('color',this.new_color);
    },
  },
  template: `<div style="border:solid; display:flex; width:350px;">
  <div v-bind:style="'background-color:' + new_color +'; width:110px; height:110px;'"></div>
  <div style="display:flex; flex-direction:column; padding:10px;">
  <div>R: <input type="range" min=0 max=255 v-model="red"> {{red}}</div>
  <div>G: <input type="range" min=0 max=255 v-model="green"> {{green}}</div>
  <div>B: <input type="range" min=0 max=255 v-model="blue"> {{blue}}</div>
  </div>
  </div>`,

});

var vm = new Vue({
  el: '#ex14',
  data: { color: null },
  template: `<div>
    <h3>Problema 14</h3>
    <div style="border:solid red; display:flex; width:375px;">
      <color-selector v-on:color="color = $event"></color-selector>
      <div v-bind:style="'color:' + color">TEXT</div>
    </div>
  </div>`,
});
