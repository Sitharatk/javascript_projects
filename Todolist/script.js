
let kitchenInput=document.getElementById("kitchen-input");
let addBtn=document.getElementById("add-btn");
let kitchenList=document.getElementById("kitchen-items-list");
function addItems(){
    let kitchenInputData= kitchenInput.value;
    let li =document.createElement("li");
    li.innerText=kitchenInputData;
    kitchenList.appendChild(li);
    kitchenInput.value="";
    kitchenInput.focus();
    console.log(li);
    

    let trashbtn=document.createElement("i");
    trashbtn.classList.add("fas","fa-trash");
    li.appendChild(trashbtn);
    console.log(trashbtn);

}
function deleteItem(event){
    if(event.target.classList[0]==="fas"){
        let item =event.target.parentElement;
        item.remove();
    }
}

addBtn.addEventListener("click",addItems);
kitchenList.addEventListener("click",deleteItem);