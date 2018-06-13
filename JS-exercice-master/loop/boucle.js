/*//exo 1 créer une variable et la réinitialiser a 0
var var1= 0;
for (var1 = 0; var1 <= 10; var1++)
{
	document.write(var1);
}



//exo 2 Créer deux variables. Initialiser la première à 0 et la deuxième avec un nombre compris en 1 et 100.
//Tant que la première variable n'est pas supérieur à 20 :

    //multiplier la première variable avec la deuxième
    //afficher le résultat
    //incrementer la première variable

var num1= 0;
var num2= 64;
for (num1 = 0; num1 <= 20; num1++)
{
	var result = num1*num2;
	document.write(result + "||");
}


//Exo 3 Créer deux variables. Initialiser la première à 100 et la deuxième avec un nombre compris en 1 et 100.
//Tant que la première variable n'est pas inférieur ou égale à 10 :

    //multiplier la première variable avec la deuxième
    //afficher le résultat
    //décrémenter la première variable


var x= 100;
var y= 36;
for (x = 100; x >= 10; x--)
{
	var result = x*y;
	document.write(result + "||");
}




//Exercice 4 Créer une variable et l'initialiser à 1.
//Tant que cette variable n'atteint pas 10, il faut :
    //l'afficher
    //l'incrementer de la moitié de sa valeur

var var2= 1;
while (var2 < 10)
{

	document.write(var2 + " / ");
		var2=var2+var2/2;
}




//Exercice 5 En allant de 1 à 15 avec un pas de 1, afficher le message On y arrive presque.
var var1= 1;
for (var1 = 1; var1 <= 15; var1++)
{
    document.write(var1);
alert("On y arrive presque!");
}



//Exercice 6 En allant de 20 à 0 avec un pas de 1, afficher le message C'est presque bon.
var var1= 20;
for (var1 = 20; var1 > 0; var1--)
{
    document.write(var1);
alert("C'est presque bon!");
}




//Exercice 7 En allant de 1 à 100 avec un pas de 15, afficher le message On tient le bon bout.
var var1= 1;
for (var1 = 1; var1 <= 100; var1+=15)
{
    document.write(var1);
alert("On tient le bon bout!");
}
*/



//Exercice 8 En allant de 200 à 0 avec un pas de 12, afficher le message Enfin !!!!.
var var1= 200;
for (var1 = 200; var1 >= 0; var1-=12)
{
    document.write(var1);
alert("Enfin");
}




