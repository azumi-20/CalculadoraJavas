const calcu = document.querySelector('#calcu')
const buton = document.querySelectorAll('button')

buton.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.id === "c"){
            calcu.value = "";
        }
        else if(btn.id === "="){
            calcu.value = eval(calcu.value)
        }
        else{
            calcu.value += btn.id
        }
    })
})