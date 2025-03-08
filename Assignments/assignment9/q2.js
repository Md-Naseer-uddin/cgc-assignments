const add=document.getElementById("add")
const submit=document.getElementById("submit")

var arr=[]
add.addEventListener("click",()=>{
    let input=document.getElementById("text")
    let text=input.value
    if(text===""){
        alert("Enter any number")
    }
    else{
    input.value=""
    arr.push(text)
    console.log("hi")
    }
})

submit.addEventListener("click",()=>{
    console.log("hiii")
    arr.forEach((val,ind)=>{
        let h3=document.createElement("h3")
        h3.innerText=`Element [${ind}] is ${val}`
        document.body.appendChild(h3)
    })
})