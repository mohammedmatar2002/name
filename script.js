function getRandomNumber(){
    return Math.floor(Math.random()*255) 

}
function getRandomRGB(){
    var randomR = getRandomNumber()
    var randomG = getRandomNumber()
    var randomB = getRandomNumber()

    return `rgb(${randomR},${randomG},${randomB}) `
}

function createCard(name){
 const container = `<div style="background-color:${getRandomRGB()}" class="card">
<div class="card-content">
<h1>Hello</h1>
<h2>My Name is </h2>
<p> ${name} <p>
<button id="delete_bttn" onclick="delete_crad(this)">Delete</button>
</div>
</div>`
document.getElementById("output_area").innerHTML+= container
}
function generateName(){
const name = document.getElementById("name_input").value 
createCard(name)
}
document.getElementById("Generate_bttn").addEventListener("click",function(){
generateName()

})

function delete_crad(node){
const parentCard = node.closest(".card")
parentCard.remove()

}


document.getElementById("Clear_bttn").addEventListener("click",function(){
 document.querySelector(".output_area").innerHTML=" "
})