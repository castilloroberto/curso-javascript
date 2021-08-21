import { d } from "./constantes.js";




export default function openTester(id) {
    const $form = 
    d.getElementById(id)
    
    const $closeBtn = $form.querySelector('input[type=button]')
    let tester = open('https://google.com')
    let windowFeatures = 'width=0,height=1,top=50%,left=50%'
    d.addEventListener('submit',(e) => {
        if (e.target === $form) {
            e.preventDefault()
            const {alto,ancho} = $form
            tester = open(
                $form.url.value,
                'terter',
                windowFeatures.replace('0',ancho.value).replace('1',alto.value)
            )
            $closeBtn.hidden = false
            
        }
        
        
    })
    d.addEventListener('click',(e) => {
        if (e.target === $closeBtn) {
            tester.close()
        }
    })
        
}