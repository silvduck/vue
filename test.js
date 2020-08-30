Vue.component('componenteHijo', {
  template:
    `<div>
      <button type="button" name="button">sin emit</button>
      <button type="button" name="button" @click="$emit('changeOn')">con emit (cambia data padre)</button>
    </div>`
});

let vm = new Vue({
  el:"#test",
  data: {
    msg: 'i am your father'
  },
  methods: {
    sonCall: function() {
      this.msg = "cambia data por la emision del componente hijo";
    }
  },
  template:
    `<div>
      {{msg}}
      <br>
      <componente-hijo v-on:changeOn="sonCall()">
      </componente-hijo>
    </div>`
});
