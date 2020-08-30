var vm = new Vue({
  el: '#ex10',
  data: {
    items: [
      { name: 'Jaime Sommers', phone: '311-555-2368' },
      { name: 'Ghostbusters', phone: '555-2368' },
      { name: 'Mr. Plow', phone: '636-555-3226' },
      { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
      { name: 'The A-Team', phone: '555-6162' },
    ],
  },
  methods: {
    remove: function(index) {
      this.items.splice(index, 1);
      //https://es.vuejs.org/v2/guide/list.html
    },
  },
  template: `<div>
  <h3>Problema 10</h3>
  <table style="border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="border: 1px solid black;">Name</th>
      <th style="border: 1px solid black;">Phone number</th>
      <th style="border: 1px solid black;"></th>
    </tr>
    <tr v-for="(item, index) in items">
      <td style="border: 1px solid black;">{{item.name}}</td>
      <td style="border: 1px solid black;">{{item.phone}}</td>
      <td style="border: 1px solid black;"><button v-on:click="remove(index)">Delete</button></td>
    </tr>
  </table>
  </div>`,
});
