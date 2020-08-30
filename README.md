#### TEMPLATE LITERALS
````js
let a = 1;
let s = `hola ${a+1}
  <--- aquests espais`;
console.log(s);
````

````js
let options = {
  el: "#test",
  template: `<span>Hello World</span>`,
}

var vm = new Vue(options);
````


#### V-BIND, V-MODEL
````js
var vm = new Vue({
  el: "#test",
  data: { a: 3, b: 4 },
  template: `<div>
      <span>Hello World {{a}}</span>
      <input value="{{a}}">
      <input value="a">
      <input v-bind:value="a">
      <input v-model:value="a">
  </div>`,
});

vm.a = 4;
````


####  METHODS
````js
let vm =  new Vue({
  el: "#test",
  data: {litres: 0},
  methods: {
    litresToCm3: function(litres) {
      return litres * 1000;
      // podem fer this.litres*1000 i v-bind:value="litresToCm3()"
    }
  },
  template: `<div>
  Litres: <input v-model:value="litres"><br />
  cm^3: <input v-bind:value="litresToCm3(litres)">
  </div>`
});
````


####  WATCHERS
````js
let vm = new Vue({
  el:"#test",
  data: { litres: 0 },
  methods: {
    litresToCm3: function(litres) {
      return litres * 1000;
    }
  },
  watch: {
    litres: function(new_value, old_value) {
      console.log(new_value); //aixo es veu a la inspeccionar>console
    }
  },
  template: `<div>
  Litres: <input v-model:value="litres"><br />
  cm^3: <input v-bind:value="litresToCm3(litres)">
  </div>`
});
````

````js
let vm = new Vue({
  el:"#test",
  data: { litres: 0, cm3: 0 },
  watch: {
    litres: function(litres) {
      this.cm3 = this.litres * 1000;
    },
    cm3: function(cm3) {
      this.litres = this.cm3 / 1000;
    },
  },
  template: `<div>
  Litres: <input v-model:value="litres"><br />
  cm^3: <input v-model:value="cm3">
  <button v-if="litres != 0" v-on:click="litres = 0">Reset</button>
  </div>`
});
````


####  EVENTS
````js
let vm = new Vue({
  el: '#test',
  data: { buffer: ''},
  template: `<div>
      {{buffer}} <br>
      <button v-on:click="buffer+='A'">A</button>
  </div>`,
});
````

````js
let vm = new Vue({
  el: '#test',
  data: {
      buffer: "",
      letters: ['A', 'B', 'C', 'D'],
  },
  methods: {
      append: function(lletra) {
          this.buffer += lletra;
      },
      backspace: function() {
          this.buffer =this.buffer.slice(0, -1);
      }
  },
  template: `<div>
      {{buffer}} <br>
      <button v-for="letter in letters" v-on:click="append(letter)">{{letter}}</button>
      <button v-on:click="backspace()">[DEL]</button>
  </div>`,
});
````


####  COMPONENT
````js
Vue.component('fancy-chrono', {
  data: function(){
    return { time: 0 }
  },
  template: `<div style="display:inline-block; padding:10px; margin:10px; border:solid;">
  {{time}}
  <button v-on:click="time=0">Reset</button>
  </div>`,
  created: function() {
    setInterval(() => this.time++, 1000);
  }
});

let vm = new Vue({
  el: '#test',
  template: `<div>
   <fancy-chrono></fancy-chrono>
   <fancy-chrono></fancy-chrono>
  </div>`,
});
````


####  PROPS
Per entrar dades cal un atribut input-value al tag html i una prop inputValue a l'opció props a les options.
````js
Vue.component('fancy-chrono', {
  data: function(){
    return { time: 0 }
  },
  props: ['label'],
  template: `<div style="display:inline-block; padding:10px; margin:10px; border:solid;">
  <span v-if="label">{{label}}: </span>{{time}}
  <button v-on:click="time=0">Reset</button>
  </div>`,
  created: function() {
    setInterval(() => this.time++, 1000);
  }
});

let vm = new Vue({
  el: '#test',
  template: `<div>
   <fancy-chrono label="Crono 1"></fancy-chrono>
   <fancy-chrono label="Crono 2"></fancy-chrono>
  </div>`,
});
````


####  EMIT
Per treure events cal emetre'ls amb $emit('nom-del-event') dins i capturar-los a fora amb un v-on:nom-del-event.
````js
Vue.component('comp', {
  data: function(){
    return { text: '' }
  },
  watch: {
    text: function() {
      if (this.text == "yes") {
        this.$emit('text-is-yes');
      }
    }
  },
  template: `<input v-model='text'>`,
});

let vm = new Vue({
  el: '#test',
  methods: {
    something: function() {
    console.log('yes!!!!');
    }
  },
  template: `<comp v-on:text-is-yes="something()"></comp>`,
});
````
