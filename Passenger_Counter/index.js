let count=0
let inbtn = document.getElementById("in")
let savebtn = document.getElementById("save")



function inBtn(){
    count+=1;
    inbtn.textContent=count;
}

function saveBtn(){
    let result = count + " - "
    savebtn.textContent+=result;
    inbtn.textContent=0
    count=0
}

console.log(count)