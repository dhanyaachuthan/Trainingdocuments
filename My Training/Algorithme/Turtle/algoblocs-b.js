// Series B

//B1 Initialisation
setPos(50,50);
changeColor(color.white);
setLineWidth(5);
faceRight();

// B1 realisation

for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


//B2 Initialisation
setPos(350,200);
changeColor(color.green);
setLineWidth(5);


//B2 realisation
for(let i = 0 ; i < 4 ; i++) {
    faceUp();
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
}

//B3 Initialisation

setPos (150,500);
changeColor(color.fuchsia)
setLineWidth(5);
faceRight();

//B3 realisation
for(let i= 0;i <4 ;i++) {
    forward(200);
    right(90);
    forward(100);
}



//B4 Initialisation
setPos (100,400);
changeColor(color.red);
setLineWidth (5);
faceRight();

//B4 realisation
for(let i=0;i <4;i++){
    forward(200);
    left(180-60);
    forward(50);
}

//B5 initialisation
setPos(1000, 550);
changeColor(color.black);
setLineWidth(5);
faceUp();

//B5 Realisation
forward(200);
changeColor(color.red);
for(let i=0;i <3;i++){
    forward(100);
    right(120);
}


//B6 initialisation

setPos(200,950);
changeColor(color.red);
setLineWidth(5);
faceRight();

//B6 Realisation
for(let i=0;i <2;i++){    
    forward(200);
    faceUp();
    forward(200);
    faceRight();
}
changeColor(color.green);
for(let i=0;i <3;i++){    
    forward(200);
    faceDown();
    forward(200);
    faceRight();
}



//B7 initialisation
setPos(200,300);
changeColor(Color.black);
setLineWidth(5);
faceRight();

//B7 Realisation




