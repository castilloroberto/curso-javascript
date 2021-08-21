import { d } from "./constantes.js";

export function changeTheme(btnId = '') {
    
    const $btnChangeTheme = d.getElementById(btnId),
        root = d.documentElement
    
    let btnText,
    {color,bgColor} = getTheme()

    setTheme(root,color,bgColor)
    
    $btnChangeTheme.onclick = () => {
        
        color = color == '#333' ? 'white' : '#333'
        bgColor = bgColor == '#333' ? 'white' : '#333'
        
        setTheme(root,color,bgColor)
        
        btnText = $btnChangeTheme.textContent 
        $btnChangeTheme.textContent =  btnText == '🌜' ? '🌞' : '🌜'
        
        localStorage.setItem('theme',JSON.stringify({color,bgColor}))

    }

}


function getTheme() {

    let theme = localStorage.getItem('theme')
    if (theme) {
        
        console.log('theme(localstorage):',theme);
        theme = JSON.parse(theme)

    } else {

        theme = {
            color:'#333',
            bgColor:'white'
        }
        localStorage.setItem('theme',JSON.stringify(theme))
        console.log('theme(raw):',theme);
        
    }
    return theme
}

function setTheme(root,color_,bgColor_) {
    root.style.setProperty('--color',color_)
    root.style.setProperty('--bg-color',bgColor_)
}