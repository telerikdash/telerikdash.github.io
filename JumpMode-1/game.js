// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    kolkoSkokaMogaDaNapravq=0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myY=myY+2
    if(myY>=520){
        myY=520;
        kolkoSkokaMogaDaNapravq=3
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    
    if(kolkoSkokaMogaDaNapravq>0){
        myY=myY-200
        kolkoSkokaMogaDaNapravq=kolkoSkokaMogaDaNapravq-1
    }
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

