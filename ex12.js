Vue.component('card', {
  props: ['personalData'],
  template:
  `<div class="card">
    <div><img v-bind:src="personalData.picture"></div>
    <div><h1>{{personalData.name}}</h1></div>
    <div>{{personalData.email}}</div>
    <div>{{personalData.phone}}</div>
    <button @click="$emit('change')">canviar nom</button>
  </div>`
});

let vm = new Vue({
  el: "#ex12",
  data: {
    person: {
      name: 'My Name',
      picture: 'foto.png',
      email: 'me@somerandomdomain.com',
      phone: '+00 00 000 0000',
    }
  },
  methods: {
    canviNom: function() {
      this.person.name = "Silvia!";
    }
  },
  template:
    `<div style="display:flex;">
      <card v-bind:personal-data="person" v-on:change="canviNom()"></card>
      </div>`,
});
