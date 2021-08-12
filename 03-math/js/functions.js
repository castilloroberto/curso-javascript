const {
    random,
    round
} = Math


// export async function makeCard({name ='titulo',species = 'subtitulo'}) {
  
//     const card = document.createElement('div')
//     card.classList.add('card','my-4')
//     card.style.width = '18rem'
    
//     const cardBody = document.createElement('div')
//     cardBody.classList.add('card-body')
    
//     const cardTitle = document.createElement('h5')
//     cardTitle.classList.add('card-title')
//     cardTitle.textContent = name
    
//     const cardSubtitle = document.createElement('h6')
//     cardSubtitle.classList.add('card-subtitle','mb-2','text-muted')
//     cardSubtitle.textContent = species
    
//     cardBody.append(cardTitle)
//     cardBody.append(cardSubtitle)

//     card.append(cardBody)
    
//     return card
    
//     const cardText = `
//     <div class="card" style="width: 18rem;">
//         <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="card-link">Card link</a>
//             <a href="#" class="card-link">Another link</a>
//         </div>
//     </div>
//   `;

// }

export async function makecarde({name = 'Name',species = 'Especies'},template) {
    


    

    return card



}


export async function makeRequest(endpoint='',method,body) {

    const headers = new Headers()
    
    if (body) {
        headers.append('Content-Type','application/json') 
    }

    const res = await fetch(endpoint,{
        body,
        method,
        headers
    })

    return res.json()

} 

export function myRandom( min = 1, max = 100){
    return round( random() * max ) + min
}