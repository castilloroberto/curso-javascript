const {
    random,
    round
} = Math

export let favorites = getFavoritos()




export const d = document
export const baseApi = 'https://rickandmortyapi.com/api'
export const apiCharacters = baseApi+'/character/$'


export async function cargarFavoritos($caja,$cardTemplate){
    
    const $fragment = d.createDocumentFragment()
    $caja.innerHTML = ''
    
    let res = await makeRequest(apiCharacters.replace('$',favorites))

    if (!(res instanceof Array)) {
        res = [res]
    }
    res.forEach( e => {
        
        const $card = makeCard(e,$cardTemplate)
        $fragment.append($card)
        // $caja.append($card)
        
    });
    $caja.append($fragment)
}


export function loader(enable = true) {
    
    d.querySelector('.spinner').style.display = enable ? 'block':'none' 
}

export function makeCard({name = 'Name',species = 'Especies',id = 0,image},template) {
    
    
    
    template.querySelector('.card-title').textContent = name
    template.querySelector('.card-text').textContent = species
    template.querySelector('.card-img-top').src = image
    template.querySelector('span.heart').style.opacity = favorites.includes(id) ? '1' : '0'  
    
    
    const $clone = d.importNode(template,true)
    
    $clone.querySelector('.card-btn').onclick = () => {
        
        
        if (!favorites.includes(id)) {
            //agregar
            favorites.push(id)
            
        } else {
            //eliminar
            favorites = favorites.filter(e => e !== id) 
            
        }
        localStorage.setItem('favorites',JSON.stringify(favorites))
        
        
    }
    
    return $clone
}


export async function makeRequest(endpoint='',method,body) {
    
    const headers = new Headers()
    
    if (body) {
        headers.append('Content-Type','application/json') 
    }
    loader(true)
    const res = await fetch(endpoint,{
        body,
        method,
        headers
    })
    loader(false)
    
    return res.json()
    
} 

export function myRandom( min = 1, max = 100){
    return round( random() * max ) + min
}

function getFavoritos(){

    let res = Array()
    let json = localStorage.getItem('favorites')
    if (json !== '' && json !==null) {
        res = JSON.parse(json)
    }
    
    return res
    
}


export async function cargarRango($caja,$cardTemplate,range) {
    const $fragment = d.createDocumentFragment()
    $caja.innerHTML = ''
    
    let res = await makeRequest(apiCharacters.replace('$',range))

    if (!(res instanceof Array)) {
        res = [res]
    }

    res.forEach( e => {
        
        const $card = makeCard(e,$cardTemplate)
        $fragment.append($card)
        // $caja.append($card)
        
    });
    $caja.append($fragment)

    
}

