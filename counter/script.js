const counter= document.getElementById('counter')
const increment=document.getElementById('inc')
const reset=document.getElementById('re')
const decrement=document.getElementById('dec')

let counterValue=0

increment.addEventListener("click",function(event){
    counterValue+=1
    counter.innerHTML=counterValue
});

decrement.addEventListener("click",function(event){
    counterValue-=1
    counter.innerHTML=counterValue
});

reset.addEventListener("click",function(event){
    counterValue=0
    counter.innerHTML=counterValue
});