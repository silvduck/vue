Vue.component('words-to-list', {
  data: function () {
    return { list: this.words.split(" ") }
    //https://www.w3schools.com/jsref/jsref_split.asp
    },
    props: { words: ''},
    template: `<ul>
    <li v-for="word in list">{{word}}</li>
    </ul>`,
});

let vm = new Vue({
    el: '#ex11',
    template: `<div>
    <h3>Problema 11</h3>
    <words-to-list words="Lorem ipsum dolor sit amet">
    </words-to-list>
    </div>`,
});
