import { cuadrado } from "./promises.js";



async function funcionAsincrona() {
    
    try {
        
        console.log('inicio funcion asincrona');
        
        let dos = await cuadrado(2)
        console.log('async function: ',dos);
        
        dos = await cuadrado('1')
        console.log('async function: ',dos);
        
    } catch (error) {
        
        console.error(error);
    }
    
}
funcionAsincrona()



const arrowAsincrona = async ()=> {
    try {
        
        console.log('inicio arrow funcion asincrona');
        
        let dos = await cuadrado(2)
        console.log('async arrow function: ',dos);
        
        dos = await cuadrado('1')
        console.log('async arrow function: ',dos);
        
    } catch (error) {
        
        console.error(error);
    }
    
} 
arrowAsincrona()

