export function cuadrado(value) {

    return new Promise((res,rej)=>{

        if ( typeof value !== 'number' ) {
            
            rej( 'se ha proporcionado un valor "?" se requiere un valor de tipo numero'.replace('?', typeof value ) )
        
        } else {
            
            setTimeout(() => {
                
                res({
                    value,
                    cuadrado:value*value
                })
                
            }, Math.random() * 2000 );
        }
        

    })     
}

cuadrado(2)
    .then(( res )=>{

        console.log('cuadrado:',res);
        return cuadrado(res.cuadrado)
    })
    .then(( res )=>{

        console.log('cuadrado: ',res);

    })
    .catch( error => {

        console.error(error);
    
    })