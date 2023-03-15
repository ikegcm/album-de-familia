var images =
["familha.png","pai.png","mae.jpg","irmao.png","irma.jpg"];
var nomes =
["familia reunida","pai","mae","irmao","irma"];


var i = 0;
function mudar()
{
     
    i++;
    var  fotosdafamilia = 5
    if(i >fotosdafamilia)

{
    i= 0;
}


     var  familiaimages=images[i]; 
     var  familianomes=nomes[i];

     document.getElementById("album").src = familiaimages;
     document.getElementById("nomes").innerHTML =familianomes;


}





