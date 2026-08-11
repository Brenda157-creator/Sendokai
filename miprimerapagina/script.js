let imagen = document.getElementById("imagen-sendokai");
let ampliada = false; 
imagen.addEventListener("click", function(){
    if(ampliada == false){
    imagen.style.width = "40vw";
    imagen.style.height = "auto";
    imagen.style.position = "fixed";
    imagen.style.top = "50%";
    imagen.style.left = "50%";
    imagen.style.transform = "translate(-50%, -50%)";
     ampliada = true;

    }else{
    imagen.style.width = "500px"; 
    imagen.style.height = "auto"
    imagen.style.border = "5px solid black"; 
    imagen.style.boxShadow = "5px 5px 15px rgb(18, 18, 246)" ;
    imagen.style.position = "static"
    imagen.style.top = "";
    imagen.style.left = "";
    imagen.style.transform = "";

           ampliada = false;
    }
})

