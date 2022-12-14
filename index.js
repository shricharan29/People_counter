let val = 0
let item = document.getElementById("count_id")
let save = document.getElementById("save")

function increment(){
    val += 1
    item.innerText = val
}

function resetCount(){
    item.innerText = 0
    val = 0
}

function saveFun(){
    if(save.innerText == ""){
        save.innerText = val
    }else{
        save.innerText += " - " + val
    }
}

function resetSaves(){
    save.innerText = ""
}