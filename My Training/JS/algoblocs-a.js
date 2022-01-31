// Series A

// A1 initialisation
setPos(25,25);
changeColor(color.red);
setLineWidth(5);
faceDown(100);

// A1 realisation
forward(200);
faceRight();
forward(100);


// A2 initialisation
setPos(300,150);
changeColor(color.green);
setLineWidth(5);
faceLeft(100);

// A2 realisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

// A3 initialisation
setPos(550,150);
changeColor(color.yellow);
setLineWidth(5);
faceLeft(100);

// A3 realisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown();
forward(100);
faceUp();
forward(200);


// A4 initialisation
setPos(700,250);
changeColor(color.fuchsia);
setLineWidth(5);
faceRight(100);

// A4 realisation
forward(100);
arcLeft(50, 90);
arcLeft(50, 90);
faceLeft();
forward(50);
arcRight(50, 90);
arcRight(50, 90);
faceRight();
forward(100);


// A5 initialisation
setPos(250,300);
changeColor(color.black);
setLineWidth(5);
faceRight();

// A5 realisation
arcRight(200, 180);
arcRight(200, 180);
arcRight(100, 180);
arcLeft(100, 180);

// A6 initialisation
setPos(900,450);
changeColor(color.aqua);
setLineWidth(5);
faceUp();

// A6 realisation
forward(100);
up();
forward(100);
down();
forward(200);
