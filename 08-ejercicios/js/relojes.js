export function start(target,btnDisable) {
    target.disabled = true;
    btnDisable.disabled = false;
} 


export function startTimer(element) {
    
    function timer() {
        element.textContent = new Date().toLocaleTimeString()
    }
    const interval = setInterval(timer,1000);
    
    function stopTimer() {
        clearInterval(interval)
    }
    
    return stopTimer 
}

