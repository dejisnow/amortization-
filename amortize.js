window.onload=()=>{
let parent = document.querySelector(".parent")
    
let main = document.querySelector(".main")
let amtB= document.querySelector(".amtB")
let intP= document.querySelector(".intP")
let intOnAmount= document.querySelector(".interest")
let amtE= document.querySelector(".amtE")

let inputP = document.getElementById("inputP")
let inputI = document.getElementById("inputI")
let inputY = document.getElementById("inputY")
let submit = document.getElementById("submit")



submit.addEventListener("click",(e)=>{
    e.preventDefault()
    
    return console.log(annuity())
}
 )
 
 
 function annuity(){
let prin = inputP.value ;
let intr =   inputI.value ;
let years = inputY.value ;
//Arrays
let amtBArray= [];
let intPArray = [];
let intArray= [];
let annArray = [];
let amtEndArray = [];



let interestCalculation = prin * intr
    let interest = intr /100
   let num=  1-(1+interest)**-years
   let division= num/interest
   
   let result = prin / division

  for(let i = parseInt(prin); i >=0; i-=result.toFixed(2)){ 
  
   let intt= i * interest 
  
  let addIntt = i + intt 
  
 let endAmnt = addIntt - result 

 amtBArray.push(Math.ceil(i))
 intArray.push(Math.ceil(intt))
 intPArray.push(Math.ceil(addIntt))
 annArray.push(Math.ceil(result))
 amtEndArray.push(Math.ceil(endAmnt))
 

 }
 amtBArray.map(x=> (amtB.innerHTML += ` <li>${x}</li> `))
 
 intArray.map(x=> (intOnAmount.innerHTML += ` <li>${x}</li> `))
 
 intPArray.map(x=> (intP.innerHTML += ` <li>${x}</li> `))
 
 
 annArray.map(x=> (main.innerHTML += ` <li>${x}</li> `))
  
 amtEndArray.map(x=> (amtE.innerHTML += ` <li>${x}</li> `))
 
 
 
 }
 
 



}
