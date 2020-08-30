var vm = new Vue({
  el: '#ex8',
  data: {
    items: [
      { name: 'Jaime Sommers', phone: '311-555-2368' },
      { name: 'Ghostbusters', phone: '555-2368' },
      { name: 'Mr. Plow', phone: '636-555-3226' },
      { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
      { name: 'The A-Team', phone: '555-6162' },
    ],
  },
  template: `<div>
  <h3>Problema 8</h3>
  <table style="border-collapse: collapse; border: 1px solid black;">
    <tr>
      <th style="border: 1px solid black;">Name</th>
      <th style="border: 1px solid black;">Phone number</th>
    </tr>
    <tr v-for="item in items">
      <td style="border: 1px solid black;">{{item.name}}</td>
      <td style="border: 1px solid black;">{{item.phone}}</td>
    </tr>
  </table>
  </div>`,
});
