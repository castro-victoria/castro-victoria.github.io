let imagenes = [];
imagenes[0] = "imagenes/1c.jpg"
imagenes[1] = "imagenes/2c.jpg"
imagenes[2] = "imagenes/3c.jpg"
imagenes[3] = "imagenes/4c.jpg"
imagenes[4] = "imagenes/5c.jpg"
imagenes[5] = "imagenes/6c.jpg"
imagenes[6] = "imagenes/7c.jpg"
imagenes[7] = "imagenes/8c.jpg"
imagenes[8] = "imagenes/9c.jpg"

let x=0;

function next(){
    x++;
    let photo = document.getElementById("fotos");
    if(x < imagenes.length)
    {
        photo.setAttribute("src",imagenes[x]);
        console.log("entra if");
    }
    else
    {
        console.log("entra else");
        x=0;
        photo.setAttribute("src",imagenes[x]);
   }
 
}

function prev(){
    x--; 
    let photo =  document.getElementById("fotos");
    if(x >= 0)
    {
        photo.setAttribute("src",imagenes[x]);
    }
    else
    {
        x=[imagenes.length-1]
        photo.setAttribute("src",imagenes[x]);
    }
}  

window.setInterval(next,4000);

