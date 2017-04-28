var board = [[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]];

var tiles = [];

function moveUp(){
	for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.y != 0 && board[tiles[i].obj.x][tiles[i].obj.y - 1] == 0{
			tiles[i].obj.y --;	
		}
		setCellOffset(tiles[i].obj);
		 board[tiles[i].obj.x][tiles[i].obj.y]= t;

	
	}	
	rndSell();
	for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.y != 0 && board[tiles[i].obj.x][tiles[i].obj.y - 1] == 0){
			tiles[i].obj.y --;	
		}
		setCellOffset(tiles[i].obj);
		 board[tiles[i].obj.x][tiles[i].obj.y]= t;

	
	}	
}

function moveDown(){
	for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.y != 4 && board[tiles[i].obj.x][tiles[i].obj.y + 1] == 0){
			tiles[i].obj.y ++;	
		}
		setCellOffset(tiles[i].obj);
  		 board[tiles[i].obj.x][tiles[i].obj.y]= t;
	
	}	
	rndSell();
	for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.y != 4 && board[tiles[i].obj.x][tiles[i].obj.y + 1] == 0){
			tiles[i].obj.y ++;	
		}
		setCellOffset(tiles[i].obj);
  		 board[tiles[i].obj.x][tiles[i].obj.y]= t;
	
	}	
}

function moveLeft(){
	for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.x != 0 && board[tiles[i].obj.x - 1][tiles[i].obj.y] == 0){
			tiles[i].obj.x --;	
		}
		setCellOffset(tiles[i].obj);
  		 board[tiles[i].obj.x][tiles[i].obj.y]= t;
	
	}	
	rndSell();	
	for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.x != 0 && board[tiles[i].obj.x - 1][tiles[i].obj.y] == 0){
			tiles[i].obj.x --;	
		}
		setCellOffset(tiles[i].obj);
  		 board[tiles[i].obj.x][tiles[i].obj.y]= t;
	
	}	
}

function moveRight(){
		for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.x != 3 && board[tiles[i].obj.x + 1][tiles[i].obj.y] == 0){
			tiles[i].obj.x ++;	
		}
		setCellOffset(tiles[i].obj);
  		 board[tiles[i].obj.x][tiles[i].obj.y]= t;
	
	}	
	rndSell();	
	for(var i = 0; i < tiles.length; i++){
		var t = board[tiles[i].obj.x][tiles[i].obj.y];
		 board[tiles[i].obj.x][tiles[i].obj.y]= 0;
		while( tiles[i].obj.x != 3 && board[tiles[i].obj.x + 1][tiles[i].obj.y] == 0){
			tiles[i].obj.x ++;	
		}
		setCellOffset(tiles[i].obj);
  		 board[tiles[i].obj.x][tiles[i].obj.y]= t;
	
	}	
}

function rndSell(){
	
	var x = Math.floor(Math.random() * 4);
	var y = Math.floor(Math.random() * 4);
	while(board[x][y] != 0){
		x = Math.floor(Math.random() * 4);
	 y = Math.floor(Math.random() * 4);
	}
	var v = Math.ceil(Math.random() * 2) * 2; 
	board [x][y] = v;
	

	var tile;
    tile = document.createElement("div");
    tile.classList.add("field__cell", "field__cell--tile");	
	tile.x = x;
	tile.y = y;
	tile.innerHTML = v;
	
/*		*/
	setCellOffset(tile);
    appendCell(tile);
	tiles.push({obj: tile, ist: false});
	
	
	return tile;
}
