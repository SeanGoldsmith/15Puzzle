let moveable = [ [2,5],[1,6,3],[2,7,4],
                  [3,8],[1,6,9],[2,5,7,10],[3,6,8,11],
                  [4,7,12],[5,10,13],[6,9,11,14],[7,10,12,15],
                  [8,11,16],[9,14],[10,13,15],[11,14,16],[12,15] ];



function moveTiles(tile,emptyTile) {
    currentPositions=[parseInt(tile.getAttribute("currentPosition"),10),parseInt(emptyTile.getAttribute("currentPosition"),10)];
    console.log(currentPositions);
    let tileCoords = [parseInt(window.getComputedStyle(tile).left,10),
                      parseInt(window.getComputedStyle(tile).top,10)];
    let emptyCoords = [parseInt(window.getComputedStyle(emptyTile).left,10),
                      parseInt(window.getComputedStyle(emptyTile).top,10)];
    tile.style.left=emptyCoords[0]+"px";
    tile.style.top=emptyCoords[1]+"px";
    tile.setAttribute("currentposition",currentPositions[1]);
    emptyTile.setAttribute("currentposition",currentPositions[0]);
    emptyTile.style.left=tileCoords[0]+"px";
    emptyTile.style.top=tileCoords[1]+"px";
    
    
}

function checkIfMoveAvailable(tile) {
    let emptyTile = document.getElementById("emptyTile");
    let currentPosition = parseInt(tile.getAttribute('currentPosition'),10);
    let currentEmpty= emptyTile.getAttribute('currentPosition');
    let legalMoves = moveable[currentEmpty-1];
    console.log(legalMoves,currentPosition);
    if(legalMoves.includes(currentPosition)){
        console.log("legal!");
        moveTiles(tile,emptyTile);
    }
    else {
        console.log("Nope!");
    }
    
}
