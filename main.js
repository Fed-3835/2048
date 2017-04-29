var field = document.getElementById("field");
var tiles = [];
var freeCell = {x: 3, y: 3};
var started = false;


function setCellOffset(cell, x, y) {
    function getOffset(c) {
        return (15 + (15 + 81.25) * c) + "px";
    }

    cell.style.left = getOffset(cell.x);
    cell.style.top = getOffset(cell.y);
}

function createCellNull() {
    var cell;
    cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--null");
    return cell;
}

function createCell() {
    var cell;
    cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--tile");
    return cell;
}

function draw(){
	for(var i = 0; i < tiles.length; i ++){
		field.removeChild(tiles[i]);
	}
	tiles = [];
	var x, y, cell;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
			if(board[y][x] != 0){
            	cell = createCell();
            	cell.y = y;
            	cell.x = x;
				cell.innerHTML = board[y][x];
            	setCellOffset(cell);
            	appendCell(cell);
				tiles.push(cell);
        }}
    }
}

function appendCell(cell) {
   	field.appendChild(cell);
}

function isLose(){
	draw();
	var lose = true;
	for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
			if(board[y][x] == 0){
            	lose = false;
				return lose;
        	}
		}
    }
	board =  [[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]];
	tiles = [];
	alert("You lose!");
	field.innerHTML = "";
	createField();  
	rndSell();
	draw();
}


function createField() {
    var x, y, cell;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            cell = createCellNull();
            cell.y = y;
            cell.x = x;
            setCellOffset(cell);
            appendCell(cell);
        }
    }
}
document.body.onkeyup = function(event){
	if(event.which == 38){
	 	moveUp();
		moveUp();
		rndSell();
		draw();
		isLose();
		
	}
	else if(event.which == 40){
	 	moveDown();
		moveDown();
		rndSell();
		draw();
		isLose();
	}
	else if(event.which == 37){
	 	moveLeft();
		moveLeft();
		rndSell();
		draw();
		isLose();
	}
	else if(event.which == 39){
	 	moveRight();
		moveRight();
		rndSell();
		draw();
		isLose();
	}};
createField();  
rndSell();
draw();
//moveDown();