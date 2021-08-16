import { d } from "./constantes.js"

export function menuAmburgesa(menu,btn,links) {
    
    menu = d.querySelector(menu)
    btn = d.querySelector(btn)
    d.addEventListener('click', ({target}) => {
    
        if (target == btn || target.matches(links)) {
            
            menu.classList.toggle('menu-visible')
    
            btn.textContent = menu.classList.contains('menu-visible') ? 'X' : '#'
            
        }
    
        
    })
}

