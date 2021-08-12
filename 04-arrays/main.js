

function suma(a,b,c) {
    return a+b+c
}

function sum(...args) {

    let res = 0
    args.forEach( e => res += e) 
    return res

}

const numbers = [1,2,3,4,5,6,7,8,9]
console.log( suma(...numbers) ); 

console.log( ...numbers );

console.log( suma.apply(null,numbers) );


console.log( 'sum(8,5,2,7)' )
console.log( sum(8,5,2,7) )

console.log('numbers: ',numbers);

/* Array.Map*/
console.group('array map')
const dobles = numbers.map( e => e * 2)
console.log('dobles: ',dobles);

const tripes = numbers.map( e => e * 3)
console.log('triples',tripes);

console.groupEnd('array map')

const cousins = [
    {
        userName:'robert13',
        name:'Roberto Castillo',
        age:20
    },
    {
        userName:'emer13',
        name:'Emerson Castillo',
        age:15
    },
    {
        userName:'ange13',
        name:'Angela valle',
        age:17
    },
    {
        userName:'mari13',
        name:'Mariela valle',
        age:22
    },
    {
        userName:'dani13',
        name:'Daniel valle',
        age:12
    },
]


console.log('cousins:',cousins);

/* Array.Filter*/

console.group('array filter')
const mayores = cousins.filter( p => p.age > 18)

console.log('mayores',mayores);
console.groupEnd('array filter')


console.group('array Reduce')

let sumaReduce = numbers.reduce( (suma,valor) => suma + valor)
console.log('numbers',numbers);
console.log('sumaReduce',sumaReduce);

console.groupEnd('array Reduce')