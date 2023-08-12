// document.getElementById("increment()").innerText = 0


let countel = document.getElementById("count-el")



let count =0
function increment(){
    
    count +=1
    countel.innerText = count
    
    
}


let saveEl = document.getElementById("save-el")

function save(){
    let mix = count + " - "
    saveEl.textContent += mix
    countel.innerText = 0 
    count = 0


    


}






 