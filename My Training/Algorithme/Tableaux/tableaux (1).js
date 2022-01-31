// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 = [144,202,216,216,222,64];

// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);

// 3) Afficher *un par un* tous les éléments du tableau tab1.
console.log(tab1[0]);
console.log(tab1[1]);
console.log(tab1[2]);
console.log(tab1[3]);
console.log(tab1[4]);
console.log(tab1[5]);
console.log(tab1[6]);

// 4) Retirer le dernier élément du tableau tab1.
tab1.pop();

// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
let tab2 = [238,222,228,216,200];

// 6) Ajouter le nombre 58 à la fin de tab2.
tab2.push(58);

// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
// tab1.push(tab2[0]);
// tab1.push(tab2[1]);
// tab1.push(tab2[2]);
// tab1.push(tab2[3]);
// tab1.push(tab2[4]);
// tab1.push(tab2[5]);
for(let i = 0 ; i < tab2.length ; i++) {
	tab1.push(tab2[i]);
}

// 8) Afficher *un par un* tous les éléments du tableau tab1.
// console.log(tab1[0]);
// console.log(tab1[1]);
// console.log(tab1[2]);
// console.log(tab1[3]);
// console.log(tab1[4]);
// console.log(tab1[5]);
// console.log(tab1[6]);
// console.log(tab1[7]);
// console.log(tab1[8]);
// console.log(tab1[9]);
// console.log(tab1[10]);
// console.log(tab1[11]);
for(let i = 0 ; i < tab1.length ; i++) {
	console.log(tab1[i]);
}

// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
let maVariable = tab1.pop();

// 10) Afficher la taille du tableau tab1.
console.log(tab1.length);

// 11) Ajouter le nombre 66 à la fin du tableau tab1.
tab1.push(66);

// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
// tab1[0] = tab1[0]/2;
// tab1[1] = tab1[1]/2;
// tab1[2] = tab1[2]/2;
// tab1[3] = tab1[3]/2;
// ...
for(let i = 0 ; i < tab1.length ; i++) {
	tab1[i] = tab1[i]/2; // tab1[i] /= 2
}
console.log(tab1);

// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)


// Créer un tableau qui contient [1,2,3,...,7777].
let tab1 = [];
// tab1.push(1);
// tab1.push(2);
// tab1.push(3);
// tab1.push(4);
for(let i = 1 ; i <= 7777 ; i++) {
    tab1.push(i);
}
console.log(tab1);

// Créer un tableau qui contient [10,20,30,...,77770].
let tab2 = [];
for(let i = 1 ; i <= 7777 ; i++) {
    tab2.push(10*i);
}
console.log(tab2);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab3 = [];
for(let i = 0 ; i < tab2.length ; i++) {
    tab3.push(tab2[i]/2);
}
console.log(tab3);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50. La fonction retournera ensuite le tableau.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
function deleteLastIfBig(t) {
    while(t.length>0 && t[t.length-1]<50) {
        t.pop();
    }
    return t;
}

console.log(deleteLastIfBig([1,45,23,-100,12]));

//Conversion entre les boucles : 
for(let i = 0 ; i < 3 ; i++) {
    console.log("Pierre");
}

let i = 0;
while(i<3) {
    console.log("Pierre");
    i++;
}


let v = parseInt(prompt("Choisissez une valeur"));
while(v > 10) {
    console.log(v);
    v /= 2; // v = v/2;
}

for(let v = parseInt(prompt("Choisissez")) ; v>10 ; v /= 2) {
    console.log(v);
}