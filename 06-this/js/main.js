
// this

/* 
this.nombre = 'contexto global'


function print() {
    console.log(this.nombre);
}

const obj = {
    nombre:'contexto de objeto',
    print(){
        console.log(this.nombre);
    },
    esto(){
        console.log(this);
        
    }
}
const obj2 = {
    nombre: 'contexto de objeto 2',
    print
}

const obj3 = {
    nombre: 'contexto de objeto 3',
    print:()=>{
        console.log(this);
    }
}
console.log('%c obj','color:blue');
obj.print()

console.log('%c obj','color:blue');
obj.esto()

console.log('%c obj2','color:blue');
obj2.print()

console.log('%c obj3','color:blue');
obj3.print()

console.log('%c print','color:blue');
print()


function Persona(nombre) {
    const that = this
    that.nombre = nombre
    return function() {
        console.log(that.nombre);
    }
}
Persona.prototype.show = ( ) => {
    console.log(this.nombre);
}


const robert = new Persona('Robert')
console.log('robert:',robert);

console.log('robert.show():');
robert() 
*/

/* call , apply and bind */


/* 
this.lugar = 'Contexto Global'

function saludar(saludo='Hoola',who='') {
    console.log(`${saludo} ${who} esto es ${this.lugar}`);
}


const obj = {
    lugar:'Contexto de objeto',
    saludar
}

const obj2 = {
    lugar:'Contexto de objeto 2',
    saludar: ( ) => {
        console.log(`${this.lugar}`);
        
    },
    presentar(){
        console.log(`${this.lugar}`);
        
    }
}

console.log('saludar.call');
saludar.call(obj)

console.log('saludar.apply');
saludar.apply(obj,['Como estas','Robertoo'])

console.log('%c obj.saludar.apply(this)','color:pink');
obj.saludar.apply(this)
console.log('obj.saludar');
obj.saludar()

console.log('obj2.saludar');
obj2.saludar()

*/

/* JSON */
/*
const json = `[
    {
        "name":"Robert",
        "age":20
    },
    {
        "name":"Angela",
        "age":17
    },
    {
        "name":"Emerson",
        "age":15
    },
    {
        "name":"Daniel",
        "age":12
    }
]`

console.log(json);
console.log(typeof json);

const parsed = JSON.parse(json) 
console.log(parsed);

const stringified = JSON.stringify(parsed) 
console.log(stringified);


fetch('js/cousins.json')
    .then( (res) => {   
        console.log('fetch res');
        console.log(res);
        // console.log(res.json());
        return res.json()
    })
    .then( json => {
        console.log(json);
    })

*/

/* apis */

/* 
 
console.log(window);

let mytext = 'Hola Roberto como estas' 
const hablar = (texto) => {
    if (confirm('aceptar habilitar el speak')) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
        console.log('permitido');
        
    } else {
        console.log('denegado');
    }
}

function userHablar(){
    
    hablar(mytext)
}
*/

/* dom */
/*
console.log('document.head: ',document.head)
console.log('document.head.title: ',document.head.title)
console.log('document.body: ',document.body)
console.log('document.documentElement: ',document.documentElement)
console.log('document.doctype: ',document.doctype)
console.log('document.documentElement.lang: ',document.documentElement.lang)
console.log('document.title: ',document.title)
console.log('document.images: ',document.images)
console.log('document.forms: ',document.forms)
console.log('document.styleSheets: ',document.styleSheets)

const links = Array.from(document.links)
console.log('document.links: ',links)

links.forEach(link => {
    console.log(link.textContent);
});
const myscripts = Array.from(document.scripts) 
console.log('document.scripts: ',myscripts)


setTimeout(() => {
    console.log(document.getSelection());
    console.log(document.getSelection().toString());
    
}, 5000);

document.write(" <h2>Hola mundo esto es un h2</h2> ")
*/


/* nodos, elementos y selectores*/
/* 
const $card = document.querySelector('.card')

console.log(getComputedStyle($card).getPropertyValue('color')); 
*/
// getComputedStyle($card).setProperty('color','white') 


/*
const $card = document.querySelector('.card')
console.log($card);

console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains('card'));
console.log($card.classList.contains('rotate-45'));

$card.classList.add('rotate-45')

console.log($card.classList.contains('rotate-45'));
console.log($card.classList);
$card.classList.remove('rotate-45')
console.log($card.classList);

console.log($card.classList.toggle('rotate-45'));
console.log($card.classList.toggle('rotate-45'));
console.log($card.classList.toggle('rotate-45'));

// $card.onclick = ()=> $card.classList.toggle('rotate-45')

// $card.classList.replace('rotate-45','rotate-135')

$card.classList.add('opacity-80','sepia')
$card.classList.remove('rotate-45','opacity-80','sepia')
$card.classList.toggle('opacity-80','sepia')
*/
/*
const $whatIsDOM = document.getElementById('que-es')
console.log($whatIsDOM);

$whatIsDOM.textContent = 'Hola mundo'

$whatIsDOM.innerText = 'Hola mundo Inner text'
let nombre = 'Roberto Carlos'
$whatIsDOM.innerHTML = `

    <br>
    <p><i>Italica</i> </p>
    <p><mark>Subrayado</mark> </p>
    <p><b>Negrita</b> </p>
    <p><b>${nombre}</b> </p>
    <br>

`

function makeCard({img,alt,title}) {

    return `
    <figure class="card">
        <img src="${img}" alt="${alt}" />
        <figcaption>${title}</figcaption>
    </figure>
    `
}
const $cards = document.querySelector('.cards')

const cardmade = makeCard({alt:'animals',img:'https://placeimg.com/200/200/animals',title:'Animals'})
console.log(cardmade);


$cards.innerHTML = cardmade+$cards.innerHTML


console.log($whatIsDOM.outerHTML);
console.log($whatIsDOM.innerHTML);
*/


// dom traversy
/*
const $cards = document.querySelector('.cards')


console.log($cards);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.lastChild);

console.log($cards.firstElementChild);

console.log($cards.lastElementChild);

console.log('hermanos');
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);


console.log('closest');
console.log($cards.closest('a'));



*/

const {
    round,
    random

} = Math

const $myList = document.getElementById('mylist'),
    $fragment = document.createDocumentFragment()



const items = Array.from({length:50},(v,k) => k)


const spreadArray = [...Array(50)].map( () => (
    round( random() * 100 )
))

items.forEach( ( e ) => {

    let li = document.createElement('li')
    li.textContent = 'Elemento #' + e
    $fragment.append(li)

})
$myList.append($fragment)








const $mytemplate = document.getElementById('mytemplate')


console.log($mytemplate);
console.log($mytemplate.content);