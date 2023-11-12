window.onload=()=>{
let parentRow = document.querySelector(".parentRow")
    
let main = document.querySelector(".main")
let amtB= document.querySelector(".amtB")
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
let intArray= [];
let annArray = [];
let amtEndArray = [];



let interestCalculation = prin * intr
    let interest = intr /100
window.onload=()=>{
let parentRow = document.querySelector(".parentRow")
    
let main = document.querySelector(".main")
let amtB= document.querySelector(".amtB")
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
let intArray= [];
let annArray = [];
let amtEndArray = [];



let interestCalculation = prin * intr
    let interest = intr /100
   let num=  1-(1+interest)**-years
   let division= num/interest
   
   let result = prin / division

  for(let i = prin; i >=0; i-=result.toFixed(2)){ 
   let intt= ( i * interest)
  let addIntt = intt + i
 let endAmnt = addIntt - result 

 
 
 
 
  amtB.innerHTML += ` <li>${i}</li> `
   intOnAmount.innerHTML +=`<li>${addIntt}</li> `
    
  main.innerHTML +=`<li> ${result.toFixed(2)}</li>`
  
  amtE.innerHTML +=` <li>${endAmnt.toFixed(2)} </li>`

 }
 
 
 
 }
 
 /*

let principal = 1000000
let interest = 19
let years = 5


 let res = annuity(inputValue,interest,years)
 
 



function cnt(pri, am){
let count = 0;
for(let i = pri; i >=0; i-=am){ 
amtB.innerHTML +=`
  100000
  `
    
  main.innerHTML +=`
  
  ${i.toFixed(1)}
  
  
  
  `
    
    }
   
  return count
      
 }
 cnt(principal,res)





A = P i(1+i)n/(1+i)n - 1

P = A = 1-(1+i)-5/i





*/



}￼Enter   let num=  1-(1+interest)**-years
   let division= num/interest
   
   let result = prin / division

  for(let i = prin; i >=0; i-=result.toFixed(2)){ 
   let intt= ( i * interest)
  let addIntt = intt + i
 let endAmnt = addIntt - result 

 
 
 
 
  amtB.innerHTML += ` <li>${i}</li> `
   intOnAmount.innerHTML +=`<li>${addIntt}</li> `
    
  main.innerHTML +=`<li> ${result.toFixed(2)}</li>`
  
  amtE.innerHTML +=` <li>${endAmnt.toFixed(2)} </li>`

 }
 
 
 
 }

let principal = 1000000
let interest = 19
let years = 5


 let res = annuity(inputValue,interest,years)
 
 



function cnt(pri, am){
let count = 0;
for(let i = pri; i >=0; i-=am){ 
amtB.innerHTML +=`
  100000
  `
    
  main.innerHTML +=`
  
  ${i.toFixed(1)}
  
  
