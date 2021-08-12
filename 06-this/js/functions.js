export function makeCard({img,alt,title}){

    return `
    <figure class="card">
        <img src="${img}" alt="${alt}" />
        <figcaption>${title}</figcaption>
    </figure>
    `
    
} 