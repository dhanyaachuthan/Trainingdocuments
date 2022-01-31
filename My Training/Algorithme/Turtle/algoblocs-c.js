// Series C

/* 
// C1 initialisation
setPos(50,50);
changeColor(color.green);
setLineWidth(5);
faceRight();

// C1 Realisation
for (let i=0;i<4;i++){
    forward(200);
    for (let j=0;j<6;j++){
        right(120);
        forward(200);        
    }
}
*/

/* 
//C2 Initialisation
setPos(200,1150);
changeColor(color.black);
setLineWidth(5);
faceUp();

//C2 Realisation
for (let i=0;i<5;i++){
    for(let i=0;i<4;i++){
        forward(100);
        right(90);
    }
    up();
    forward(200);
    down();
}
*/

//C3 Initialisation
setPos(50,600);
changeColor(color.green);
setLineWidth(5);
faceRight();

//C3 Realisation
for (let i=0;i<3;i++){
    for(let j=0;j<8;j++){
        forward(200);
        left(135);
    }
    up();
    forward(400);
    down();
    shiftColor(0.1); 
}