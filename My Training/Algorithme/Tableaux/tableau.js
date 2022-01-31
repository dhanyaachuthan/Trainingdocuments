

// Créer un tableau qui contient [1,2,3,...,7777].
let tab1 = [];
for(let i = 1 ; i <= 7777 ; i++){
    tab1.push(i);
    console.log(tab1[i]);
}
console.log(tab1);
// Créer un tableau qui contient [10,20,30,...,77770].
//let tab2 = [];
//for(let i = 1; i <= 7777 ; i++);{
   // tab2[i] = tab1[i];
//tab2.push(tab1);
   
//} 
//console.log(tab2);
let tab2 = [] ;
for(let i = 1 ; i <= 7777; i++){
tab2[i] = tab2[i]*10;
tab2.push(i);
console.log(tab2[i]);

}
console.log(tab2);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab3 = [];

for(let i = 1 ; i <=7777 ; i++){
    tab3[i] = tab2[i]/2;
    
    console.log(tab3[i]);
}

console.log(tab3);



// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
let tab = [];
function tab4([]){
    for(let i =0 ; i <= length ; i++){
        if (tab([i]) < 50) {
            tab.pop(i);
        }

    }
}
// console.log(leNomDeVotreFonction([1,45,88,54,23,,-100,12]); // doit afficher [1,45,88,54]
let tab = [];
function tab4([]){
    for(let i =0 ; i <= length ; i++){
        if (i >= 5) {
            tab.pop(i);
        }

    }
    console.log(tab4);
}
