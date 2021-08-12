import { makeCard, makeRequest, myRandom } from "./functions.js";

const $btnCargar = document.getElementById('btnCargar')
const $caja = document.getElementById('caja')
const $cardTemplate = document.getElementById('cardTemplate').content

const api = 'https://rickandmortyapi.com/api/character/$'

$btnCargar.onclick = async () => {

    const res = await makeRequest(api.replace( '$', myRandom() ))
    console.log(res);
    
    const $card = await makeCard(res,$cardTemplate)
    console.log(res.name,res.species);

    $caja.append($card)

}