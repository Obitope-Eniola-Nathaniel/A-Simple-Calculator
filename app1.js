const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();



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
        display.value += item.innerText        
    })
})