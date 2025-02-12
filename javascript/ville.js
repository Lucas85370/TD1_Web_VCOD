//Code JavaScript

function afficheVille() {
    // 1. Récupération de la valeur courante du select avec son id
    let nomVilleChoisie = document.getElementById("choixVille").value;
    // 2. Récupération de la liste de toutes les div correspondant à une div de météo
    // grâce à la classe « ville »
    let villes = document.getElementsByClassName("ville");
    // 3. Parcours de la liste des div météo. On cache celles non demandées.
    for (let i = 0; i < choixVille.length; i++) {
    // l’attribut id de l’élément est comparée à la ville choisie
        if (villes[i].id === nomVilleChoisie) {
        // garder l'élément visible -> ELEMENT.style.display= "";
            villes[i].style.display="block";
        } else {
        // cacher l'élément -> ELEMENT.style.display= "none";
            villes[i].style.display="none";
        }
    }
}

