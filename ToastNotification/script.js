let toatBox=document.getElementById('toastBox');
let successMsg='successfully submitted';
let errorMsg='please fix the error'
let invalidMsg='invalid input,check again'

function showToast(msg){
    let toast=document.createElement('div');
    toast.classList.add('toast')
    toast.innerHTML=msg;
    toatBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();},4000);
    }