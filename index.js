document.querySelector(".color").addEventListener('input',function(){
    let color = document.querySelector(".color").value;
    document.querySelector("p").style.color = color;
})
document.querySelector(".taille").addEventListener('input',function(){
    let taille = document.querySelector(".taille").value + "px";
    document.querySelector("p").style.fontSize = taille;
})
document.querySelector(".font").addEventListener('change',function(){
    let font = document.querySelector(".font").value ;
    document.querySelector("p").style.fontFamily = font;
})
