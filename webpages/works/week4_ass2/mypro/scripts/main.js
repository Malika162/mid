const myHeading= document.querySelector("h1");
myHeading.textContent="Hello World!";

let name="hahah";
//alert(name);

console.log(name);


let number= 79;
let boolean=false;
let myA=[7, 'hi', true,['hello','move on', 'kruttt']];
let myO=document.querySelector("h1");



let imgElement= document.querySelector("img");
imgElement.addEventListener("dblclick", function(){
    alert("Ouch!");
})


let img = document.querySelector('img');
img.onclick = () => {
    if (document.querySelector('img').getAttribute("src") === "imgs/a.png"){
        document.querySelector('img').setAttribute('src', "imgs/d.png");
    }else{
        document.querySelector('img').setAttribute('src', 'imgs/a.png');
    }
}

let me = prompt("Enter your name:");
if (me != null) {
    document.querySelector("h1").innerHTML = "Welcome to Ala-Too, " + me + "!";
}