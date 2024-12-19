serachEle=document.querySelector(".search")
//debouncing
// let counter=0
// let a;
// serachEle.addEventListener("keyup",function(){
//     clearTimeout(a)
//     a=setTimeout(debounce,3000)
// })

// function debounce(){
//     console.log("hi narsimha")
// }

//throtling
let throtleFlag=true
serachEle.addEventListener("keyup",function(){
    if(throtleFlag){
        throttleFunction()
        throtleFlag=false
        setTimeout(()=>{
            throtleFlag=true
        },5000)
    }
})
function throttleFunction(){
    console.log("throotle worked")
}

