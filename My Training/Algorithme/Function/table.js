/*
console.log("Tableaux");
let age = [25,777,8];
// Numéro des cases :
//          0  1  2

console.log("Le tableau contient",age.length,"cases.");
// Afficher ce qu'il y a de la case numéro 1
console.log(age[1]);
age[1] = 15+age[0];
console.log(age[1]);

// Ajouter une case à la fin d'un tableau
age.push(100);
console.log("Le tableau contient",age.length,"cases.");
console.log(age);

// Enelever la dernière case du tableau :
age.pop();
console.log("Le tableau contient",age.length,"cases.");
// En "bonus", pop retourne la valeur qui était dans la case que l'on vient de supprimer.
console.log(age.pop());
console.log(age);

// age.length : nombre de cases du tableau
console.log("Le tableau contient",age.length,"cases.");
*/

console.log("Exercice tableaux");
// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 =[144,202,216,216,222,64];

// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);

// 3) Afficher *un par un* tous les éléments du tableau tab1.
for(let i=0 ;i<tab1.length; i++){
    console.log(tab1[i]);

}
// 4) Retirer le dernier élément du tableau tab1.
tab1.pop();


// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.

let tab2=[238,222,228,216,200];

// 6) Ajouter le nombre 58 à la fin de tab2.

tab2.push(58);

// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.

for (let i=0;i<tab2.length;i++){
    tab1.push(tab2[i]);

}
// 8) Afficher *un par un* tous les éléments du tableau tab1.
for(let i=0;i<tab1.length;i++){
    console.log(tab1[i]);
}

// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
let maVariable=tab1.pop();


// 10) Afficher la taille du tableau tab1.

console.log(tab1.length);

// 11) Ajouter le nombre 66 à la fin du tableau tab1.

tab1.push(66);

// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.

for(let i=0;i<tab1.length;i++){
    tab1[i]=tab1[i]/2;
}

// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)

//19/01/2022


// Créer un tableau qui contient [1,2,3,...,7777].

let tab5=[];
for(let i=0;i<7777;i++){
    tab5[i]=i+1;
}



// Créer un tableau qui contient [10,20,30,...,77770].

let tab6=[];

for(let i=0;i<7777;i++){
    tab6[i]=(i+1) * 10;

}


// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

let tab7=[];
for(let i=0;i<tab6.length;i++){
     tab7[i]=tab6[i]/2;
}
    

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.

function f1(tab5) {
    while(tab5[tab5.length-1] < 50) {
        tab5.pop();
    }
    return tab5;
}

console.log(f1([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]

// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.


function f2(tab6) {
    console.log(tab6[tab6.length-1]);
}

f2([20,40,34,566,700]);


// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau

function f3(tab6) {
    return tab6[tab6.length-1];
}

f3([20,40,34,566,700]);

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function min(tab7){
    let minVal = tab7[0];
    for(let i=0; i<tab7.length; i++) {
        if (minVal > tab7[i]) {
            minVal = tab7[i];
        }
    }

    return minVal;
}

console.log(min([3,4,455,5,5]));



// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function max (tab8){
    let maxVal =tab8[0];
    for(let i=0;i<tab8.length;i++){
        if (maxVal < tab8[i])
            maxVal =tab8[i];
    }

    return maxVal;

}

console.log(max([5,9,78,34,23,18999,0]));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

function secondMax(tab){    

    let firstMax=-1, secondMax=-1;
    for(let i=0; i<tab.length; i++){
        if(firstMax < tab[i])
            firstMax = tab[i];

        if(tab[i] < firstMax && tab[i] > secondMax)
            secondMax = tab[i];
    }

    return secondMax;

}

console.log(secondMax([5,9,99,34,23,18999,0]));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

function f10 (tab,n){
    let occurrence = 0;
    for (let i=0;i< tab.length;i++){
        if (n==tab[i])
        occurrence++;
    }
    return occurrence;
 }

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
 function f11 (tab,n){
    for (let i=0;i< tab.length;i++){
        if (n==tab[i])
            return "true";
    }
    return "false";
 }
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

//Sans tri, on peut faire plusieurs boucles pour identifier l'occurrence du nombre dans le tableau.
//avec le tri, l'occurrence du nombre sera identifiée rapidement.

// Le code qui est là-dedans est exécuté une fois tout au début, au chargement
function setup() {
    // Créer une zone de dessin, de 400 pixels de large et 400 pixels de haut.
    createCanvas(400, 400);
    console.log("Setup");
  }
  
  // Le code dans "draw" est exécuté à chaque frame, pour faire un dessin.
  function draw() {
    // Remplir le dessin d'une couleur unique.
    // Un seul nombre = nuance de gris
    background(108);
    // Trois nombres : RGB
    // background(184,150,57);
    // Deux nombres : nuance de gris + opacité
    // background(0,5);
    // Quatre nombres : RGB + opacité
    // background(255,0,0,2);
    
   
    stroke(0);
    strokeWeight(1);
    // Dessiner le pixel qui est à 100 pixels du bord gauche et 200 pixels du bord haut
    point(100,200);
    
    // Changer la couleur du crayon
    stroke(255,0,0);
    // Changer la taille du crayon
    strokeWeight(5);
    point(200,100);
    
    // Dessiner une ligne
    line(50, 320, 10, 50);
    
    // Couleur de remplissage
    // fill(0,255,0);
    noFill();
    // Dessiner un cercle
    circle(300,200,100);
    
    // Faire un carré
    square(200,200,50);
    
    // Faire un rectangle
    rect(250,50,100,20);
    
    // Faire une ellipse
    ellipse(150,300,50,100);
    
    // console.log("Draw");
    // Variables créées automatiquement par p5
    // console.log(mouseX, mouseY);
    circle(mouseX,mouseY,50);
  }
  
  function mouseClicked() {
    console.log("Clic");
  }


  function sum(n){
      let totale =0;
      for(let i=1;i<=n;i++){
            totale+=i;

      }
      return totale;
  }

  console.log(sum(715));

  function sum1(a,b){
      let totale1 =0
  }