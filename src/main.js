import Hello from "./a";

console.log(Hello.say());

var div = document.getElementById('test');

var hi = new Hello();

div.innerHTML += Hello.say();