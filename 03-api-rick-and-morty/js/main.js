import {
    apiCharacters,
    cargarRango,
    d, 
    favorites, 
    makeCard, 
    makeRequest, 
    myRandom,
} from "./functions.js";


d.addEventListener('DOMContentLoaded',()=>{
    
    let range = Array.from({length:10},(valor,indice) => indice)
    const $caja = document.getElementById('caja')
    const $cardTemplate = document.getElementById('cardTemplate').content
    cargarRango($caja,$cardTemplate,range)
    
    
    
    d.addEventListener('click', async ({target}) => {
        
        
        
        if (target.matches('#btnFav')) {
            if (favorites.length > 0) {
                // cargarFavoritos($caja,$cardTemplate)
                cargarRango($caja,$cardTemplate,favorites)
                
            } else {
                
                $caja.innerHTML= '<h2>No ha agregado favoritos aun</h2>'
            }
            
        }
        
        if (target.matches('.card-btn')) {
            

            if (target.nextElementSibling.style.opacity == '1') {
                
                target.nextElementSibling.style.opacity = '0'
            } else {
                
                target.nextElementSibling.style.opacity = '1'
            }
            
        }
        
        if (target.matches('#btnCargar')) {
            
            $caja.innerHTML = ''
            makeRequest(apiCharacters.replace( '$', myRandom() ))
            .then( res => {

                const $card = makeCard(res,$cardTemplate)
                
                $caja.prepend($card)

            })
            
        }
        
        if (target.matches('#btnTodos')) {
            cargarRango($caja,$cardTemplate,range)
            range = range.map((v,i) => range.length+v)
        }
    
    
    
    }) 

})

