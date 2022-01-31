function marches(){
    for(let i=0;i<2;i++){
        forward(100);
        faceUp();
        forward(100);
        faceRight();
    }
}

// E4 initialisation
setPos(100,800);
changeColor(color.red);
setLineWidth(5);
faceRight();

//E4 realisation
marches();
changeColor(color.yellow);
forward(200);
changeColor(color.blue);
marches();
changeColor(color.green);
marches();
forward(200);


