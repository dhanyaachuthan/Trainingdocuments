// Series D


// D9 initialisation
setPos(600,600);
changeColor(color.blue);
setLineWidth(5);
faceRight();

let longueur = 100;
// D9 Realisation
for (let i=0;i<6;i++){
    forward(longueur);
    right(120);
    longueur += 100; // longueur = longueur + 100;
}
 

// D10 initialisation
setPos(600,600);
changeColor(color.blue);
setLineWidth(5);
faceRight();

let longueur = 100;
// D10 Realisation
for (let i=0;i<10;i++){
    forward(longueur);
    right(90);
    longueur = longueur + 50;
} 

// D11 initialisation
setPos(300,600);
changeColor(color.blue);
setLineWidth(5);
faceRight();

let longueur=250
for (let i=0;i<5;i++){
    for(let j=0;j<7;j++){
        forward(longueur);
        left(120);
    }
    longueur = longueur - 50;
    right(120);
}

 


// D12 initialisation

setPos(400,600);
changeColor(color.red);
setLineWidth(5);
faceRight();

let longueur=100
for (let i=0;i<6;i++){
    for(let j=0;j<6;j++){
        forward(longueur);
        left(120);
    }
    forward(longueur);

    left(60);
    longueur = longueur + 50;
}



// D13 initialisation

setPos(400,600);
changeColor(color.red);
setLineWidth(5);
faceRight();

