// exo 1 Faire une fonction qui retourne 'true'. 
//pour retourner une fonction, utiliser 'return'
function fonction1()
{
	return true;

}

//exo 2 faire une fonction qui prend en paramètre une chaine de caracteres et qui renvois cette meme chaine.
function fonction2(string){
var string= "bonjour je m'appelle zakia";
alert(string);
	return string;
}


//exo 3 faire une fonction qui prend 2 chaine de caracteres et qui renvois son result!
function fonction3(){
var texte1= "salut ";
var texte2= "les copains";
alert(texte1 + texte2);

}

//exo 4 faire une fonction qui prend en compte 2 nombres
function fonction4(){

var num1= prompt("num1");
var num2= prompt("num2");


if (num1>num2){
	alert("le premier nombre est plus grand");
}
else if(num1<num2){
	alert("le premier nombre est plus petit");
}
else if(num1==num2){
	alert("les 2 nombres sont egaux");
}
}

//exo 5 faire une fonction qui prend une chaine de caractere et un nombre
function fonction5(){
var texte= "salut ";
var num= "numero 5";
alert(texte + num);
}


//exo 6 faire une fonction 3 parametres "age nom et prenom"
function fonction6(){
var nom= "SEGOND";
var prenom= "Zakia";
var age= 36;
alert("Bonjour " + " " + nom + " " +  prenom + " tu as " + age + " ans");
}


// exo 7 faire une fonction qui prend les parametres age et sexe!
function fonction7(){
var age= 36
var sexe= "femme";

if (age >=18, "femme"){
	alert("Vous êtes une femme et vous êtes majeur");
}
else if(age<18, "femme"){
	alert("Vous êtes une femme et vous êtes mineur");
}
else if (age>=18, "homme"){
	alert("Vous êtes une homme et vous êtes majeur");
}
else if (age<18, "homme"){
	alert("Vous êtes un homme et vous êtes mineur");
}
}