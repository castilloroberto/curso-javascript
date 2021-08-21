import { d } from "./constantes.js";
const { floor } = Math

export function countdown(countdown,date,finalMessage) {
    
    const $countDown = d.getElementById(countdown),
    $btnSetDate = d.querySelector('#seccion3 button')
    
    date = new Date(date).getTime()
    let faltan = 0,now = 0,
    dias = 0 ,h = 0,m = 0,s = 0

    console.log(new Date(date).toLocaleDateString());
    console.log(new Date().toLocaleDateString());
    
    let interval = setInterval(() => {
        
        now = Date.now()
        faltan = date - now
        
        //(1000 * 60 * 60 * 24) = 1d = 86_400_000ms 
        dias = floor(faltan/86_400_000) 
        
        //(1000 * 60 * 60) = 1h = 3_600_000ms
        h = floor((faltan % 86_400_000) / 3_600_000)  
        
        //(1000 * 60) = 1m = 60_000ms
        m = floor((faltan % 3_600_000) / 60_000) 
        
        //(1000) = 1s = 1000ms
        s = floor((faltan % 60_000) / 1000)
       
        $countDown.textContent = `Faltan ${dias} dias ${h} horas ${m} minutos ${s} segundos`
       
        if (faltan <= 0) {
            clearInterval(interval)
            $countDown.textContent = finalMessage
        }
        
    }, 1000);   

}