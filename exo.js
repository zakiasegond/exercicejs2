//exo 1  Boite de dialogue pour afficher ton prenom
var maVar="zakia";
alert(maVar);


//exo 2   Boite de dialogue pour afficher nom prenom et ville // pour mettre à la ligne, utiliser le \n
var nom= "segond";
var prenom="zakia";
var ville="auch";

alert ("nom: " + nom + "\nprenom: " + prenom + "\nville:" + ville);


//exo 3 boite de dialogue de SAISI 
var prenom = prompt("quel est ton prenom?");
alert("Bonjour " + "prenom");


// exo 4 boite de dialogue de SAISI en demandant les memes info que l'exo 2
var nom = prompt("Quel est ton nom?");
var prenom = prompt("Quel est ton prénom?"); 
var ville = prompt("Ou habites tu?");
alert("Bonjour, "+ nom + " " + prenom +  " j'habite à "+ ville);


// exo 5 demander des nombre a virgule a l'utilisateur. pour garder que le nombre entier, utiliser parseInt
var nombre1 = prompt("Choisissez un premier nombre a virgule?");
var nombre2 = prompt("Choisissez un deuxième à virgule?");
nombre1=parseInt(nombre1);
nombre2=parseInt(nombre2);
var result =nombre1 * nombre2;
alert(result);



// exo 7 boite de dialogue de SAISI pour pointure et année de naissance
function zakia(){
var result = prompt("Quel est ta pointure?")*2 +5 *50 -prompt("Quelle est ton année de naissance?")+1766;
alert(result);
}



// exo 8 boite de dialogue SAISI pour demander l'age et afficher Majeur ou Mineur!
var age = prompt("Quel est votre age?");
if (age >=18)
	alert("Vous êtes Majeur!");
else
	alert("Vous êtes Mineur!");

