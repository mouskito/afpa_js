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
	},
	{
		'nom':'Josse',
		'prenom': 'Alex',
		'moyenne':1
	}
];


if (etudiants.length < 0) {
	document.write(" Pas d'etudiants inscrits pour le moment");
}else{

	//Affichage du titre
	var titre = document.createElement('h2');
	titre.append(document.createTextNode('Liste des etudiants'));

	document.querySelector('.container').append(titre);

	var liste_etudiant = document.createElement('table');
	
	liste_etudiant.setAttribute("class","table table-success table-striped")

	//console.log(liste_etudiant);

	//Nombre des admis
	var nombre_admis =0;

	for(var index=0; index < etudiants.length; index++){
		
		var tr = document.createElement('tr');
		var td_nom = document.createElement('td');
		var td_prenom = document.createElement('td');

		var etudiant_nom =document.createTextNode(etudiants[index].nom);
		var etudiant_prenom =document.createTextNode(etudiants[index].prenom);
		
		td_nom.appendChild(etudiant_nom);
		td_prenom.appendChild(etudiant_prenom);

		tr.appendChild(td_nom);
		tr.appendChild(td_prenom);

		//Recuperation des etudiants avec 10 ou plus de moyenne
		if (etudiants[index].moyenne >=10) {
			nombre_admis++;
		}

		liste_etudiant.append(tr);
		}

		document.querySelector('.container').append(liste_etudiant)

		//Creation des boutons Admis et non-admis

		var btn_admis = document.createElement('button');
		btn_admis.setAttribute("class","btn btn-success admis");

		contenu_btn_admis = document.createTextNode('Voir la liste des admis   ');

		var badge = document.createElement('span');
		badge.setAttribute("class","badge bg-secondary");
		var contenu_badge = document.createTextNode(nombre_admis);

		badge.appendChild(contenu_badge);

		btn_admis.appendChild(contenu_btn_admis);
		btn_admis.appendChild(badge);

		// Button des non admis
		var btn_echec = document.createElement('button');
		btn_echec.setAttribute("class","btn btn-danger echec");

		contenu_btn_echec = document.createTextNode('Voir la liste des non-admis   ');

		var badge = document.createElement('span');
		badge.setAttribute("class","badge bg-secondary");
		var contenu_badge = document.createTextNode(etudiants.length-nombre_admis);

		badge.appendChild(contenu_badge);

		btn_echec.appendChild(contenu_btn_echec);
		btn_echec.appendChild(badge);


		document.querySelector('.container').append(btn_admis);
		document.querySelector('.container').append(btn_echec);
}

//Appel de la fonction listeAdmis

document.querySelector('.admis').onclick=listeAdmis;
document.querySelector('.echec').onclick=listeEchec;

//Appel de la fonction listeAdmis

function listeAdmis() {
	var ul_admis = document.createElement('ul');

	for(var index =0; index < etudiants.length; index++){
		if (etudiants[index].moyenne >= 10) {
			var li_admis = document.createElement('li');

			var nom = document.createTextNode("- "+etudiants[index].nom);
			var prenom = document.createTextNode(" "+etudiants[index].prenom);
			var moyenne = document.createTextNode(" avec "+etudiants[index].moyenne+ " de moyenne");

			li_admis.appendChild(prenom);
			li_admis.appendChild(nom);
			li_admis.appendChild(moyenne);

			ul_admis.appendChild(li_admis)
		}

		if (document.querySelectorAll('ul').length > 0) {
			document.querySelector('ul').remove();
		}
		document.querySelector('.container').append(ul_admis);
	}
}

function listeEchec() {
	var ul_echec = document.createElement('ul');

	for(var index =0; index < etudiants.length; index++){
		if (etudiants[index].moyenne < 10) {
			var li_echec = document.createElement('li');

			var nom = document.createTextNode(" "+etudiants[index].nom);
			var prenom = document.createTextNode(etudiants[index].prenom);
			var moyenne = document.createTextNode(" avec "+etudiants[index].moyenne+ " de moyenne");

			li_echec.appendChild(prenom);
			li_echec.appendChild(nom);
			li_echec.appendChild(moyenne);

			ul_echec.appendChild(li_echec)
		}

		if (document.querySelectorAll('ul').length > 0) {
			document.querySelector('ul').remove();
		}
		document.querySelector('.echec').append(ul_echec);
	}
}

