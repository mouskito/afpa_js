/*var saisi = prompt("Entrez un numero");

if ( (10 < saisi) && (saisi < 100) ) {
	alert("La police");
}
else if (saisi == 18) {

	alert("Les pompiers");
}
else if (saisi == "0800") {

	alert("Numero vert");
}else{
	alert("Numero inconnu");
}


switch (parseInt(saisi)){
	case 18:
		alert("Les pompiers");
	break;
	case 17:
		alert("La police");
	break;

	case 0800:
		alert("Numero vert");
	break;
	default:
		alert("Numero inconnu");
	break;
}
*/

/* Les boucles */

/* Boucle While */
	var index = 5;
	/*while(0 < index){
		
		console.log(index)

		alert("J'aime le js");

		index--; décrémenter
		//index++; incrémenter
	}*/

/* Fin boucle While */


/* boucle For */
/*
for (var index = 0; index < 5; index++){
	alert("J'aime bien le js");
}*/
/* Fin boucle For */

/* Do while */
var test =5;

do{
	//console.log("Je suis la boucle do while")
	test++;
}while(test < 3)
/* Fin Do while */

/* Boucles imbriquées */

/*for (var i = 0; i < 5 ; i++) {
	console.log(" Je suis la premiere boucle " +i);
	for (var afpa = 0;  1 < 3; afpa++) {
		console.log(afpa);
		for (var test = 0; test < 2 ; test++) {
			console.log("je suis test " +test)
		}
	}
}*/

var prenom = ['Moussa', 'Afpa', 'Zak', 'Vanessa', 'Simon', 'Rim'];
		//		0			1		2		3		4			5


for (var etudiant = 0; etudiant < prenom.length; etudiant++){
	console.log(prenom[etudiant])
}