import { d } from "./constantes.js";


export function scrollTop(btnid = '',minScroll = 500) {
    
    const $btnScrollTop = d.getElementById(btnid)
    
    $btnScrollTop.onclick = () => {
        scrollTo(0,0)
    }

    d.addEventListener('scroll',(e)=>{
    
         
        if (scrollY > minScroll) {

            $btnScrollTop.classList.remove('hidden')
            //$btnScrollTop.style.display = 'block'
            
        } else {
            
            $btnScrollTop.classList.add('hidden')
            //$btnScrollTop.style.display = 'none'
        }
        
    
    })
}
