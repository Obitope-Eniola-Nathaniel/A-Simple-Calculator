const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const sound1 = new Audio("click.wav")

document.getElementById("date").innerHTML = `${day}-${month + 1}-${year}`;

let display= document.getElementById("display")
let button = document.querySelectorAll(".btn")

button.forEach((item) => {
    item.addEventListener("click",() => {
        if(item.innerText === "="){            
            try{                
                let result = parseFloat(eval(display.value))          
                display.value = result
                return
            }catch{
                display.value = display.value
                return
            }
        }
        if(item.innerText === "C"){        
            display.value = ""
            return           
        }
        if(item.innerText === "del"){
            currentChar = display.value
            lastChar = currentChar.slice(0, currentChar.length - 1)
            display.value = lastChar
            return
        }
        display.value += item.innerText        
    })
})


 // Toggles visibility of greeting
 function blink()
 {
     let body = document.querySelector('.name');
     if (body.style.visibility == 'hidden')
     {
         body.style.visibility = 'visible';
     }
     else
     {
         body.style.visibility = 'hidden';
     }
 }

 // Blink every 500ms
 window.setInterval(blink, 1000);