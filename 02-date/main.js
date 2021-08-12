
const $hora = document.getElementById('hora')


let fecha = new Date();

$hora.innerHTML = `Hora ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
setInterval(() => {

    fecha = new Date();
    $hora.innerHTML = `Hora ${fecha.toLocaleTimeString()}`

}, 1000);

console.log('Date():',Date());


console.group('Fecha');
console.log('Fecha:',fecha);

console.log( 'getDate(): -> mes', fecha.getDate() +1 );

console.log( 'getDay(): -> dia', fecha.getDay() + 1 );

console.log( 'getMonth(): -> mes', fecha.getMonth() + 1);

console.log( 'getFullYear(): -> Año', fecha.getFullYear());
console.groupEnd('Fecha');






console.group('Tiempo');

console.log( 'getHours(): -> Hora', fecha.getHours());

console.log( 'getMinutes(): -> Minutos', fecha.getMinutes());

console.log( 'getSeconds(): -> segundos', fecha.getSeconds());

console.groupEnd('Tiempo');


console.group('Mas Fechas');

console.log( 'toDateString(): -> fecha; ', fecha.toDateString());
console.log( 'toLocaleString(): -> fecha y hora:', fecha.toLocaleString());
console.log( 'toLocaleDateString(): -> fecha simple:', fecha.toLocaleDateString());
console.log( 'toLocaleTimeString(): -> Hora simple:', fecha.toLocaleTimeString());
console.log( 'now(): -> now:', Date.now());

console.groupEnd('Mas Fechas');


console.group('Aritmetica fechas');

let myCumple = new Date(2000,7,31)
console.log( 'mi cumple: -> ', myCumple.toLocaleDateString());
console.log( 'mi cumple: -> ', myCumple.toDateString());



console.groupEnd('Aritmetica fechas');




