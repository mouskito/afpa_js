var etudiants=[
	{
		'nom':'Camara',
		'prenom': 'Moussa',
		'moyenne':12
	},
	{
		'nom':'Dupont',
		'prenom': 'Jean',
		'moyenne':8
	},
	{
		'nom':'Machin',
		'prenom': 'Bidule',
		'moyenne':2
	},
	{
		'nom':'Dujardin',
		'prenom': 'Alex',
		'moyenne':10
	}
];


if (etudiants.length < 0) {
	document.write(" Pas d'étudiants inscrits pour le moment");
}else{

	var liste_etudiant = document.createElement('table');
	
	liste_etudiant.setAttribute("class","table table-success table-striped")

	//console.log(liste_etudiant);

	for(var index=0; index < etudiants.length; index++){
		
		var tr = document.createElement('tr');
		var td_nom = document.createElement('td');
		var td_prenom = document.createElement('td');

		var etudiant_nom =document.createTextNode(etudiants[index].nom);
		var etudiant_prenom =document.createTextNode(etudiants[index].prenom);
		
		td_nom.appendChild(etudiant_nom);
		td_prenom.appendChild(etudiant_prenom);

		tr.appendChild(td_nom)
		tr.appendChild(td_prenom)

		liste_etudiant.append(tr)
		}

		document.querySelector('body').append(liste_etudiant)
}
document.write("liste_etudiant")
