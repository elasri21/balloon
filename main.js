let ballon = document.querySelector("#balloon");  // get the balloon 
function upSize(){  
    let e = window.event; // create the event
    let style = window.getComputedStyle(ballon,null).getPropertyValue("font-size");  // get the element,s style
    let size = parseFloat(style);  // convert the styleto a float number
    let tenPercent = size * 0.1;   // 10 % is the amount of air we can put in or out of the balloon by a click
        if(e.defaultPrevented){
            return;
        }
        switch (e.key) {
            case "ArrowUp":  
                ballon.style.fontSize = size + tenPercent + 'px';
                e.preventDefault()
                break;
            case "ArrowDown":
                ballon.style.fontSize = size - tenPercent + 'px';
                e.preventDefault();
                break;
            default: 
                break;
    
        }
        if(size > 100) {  // when the balloon reaches 100px 
            ballon.textContent = "💥";   // it will explode
            window.removeEventListener("keydown", upSize);  // stop growing the balloon size
        } else if(size <= 10) {  // if the balloon size is under 10, stop shrinking it
            window.removeEventListener("keydown", upSize);
        }
}

window.addEventListener("keydown", upSize)


