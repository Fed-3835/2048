var board = [[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]];

var tiles = [];

function moveUp(){
	for(var i = 3;i > 0; i--){
		for(var j = 0; j <= 3; j++){
			if(board[i][j] != 0){
			if(board[i - 1][j] == 0){
				board[i - 1][j] = board[i][j];
				board[i][j] = 0;
			}
			else if(board[i - 1][j] == board[i][j]){
				board[i - 1][j] += board[i][j];
				board[i][j] = 0;
			}
			}
		}
	}

}

function moveDown(){
	for(var i = 0;i < 3; i++){
		for(var j = 0; j <= 3; j++){
			if(board[i][j] != 0){
			if(board[i + 1][j] == 0){
				board[i + 1][j] = board[i][j];
				board[i][j] = 0;
			}
			else if(board[i + 1][j] == board[i][j]){
				board[i + 1][j] += board[i][j];
				board[i][j] = 0;
			}
		}}
	}
		
}

function moveLeft(){
	for(var i = 3;i > 0; i--){
		for(var j = 0; j <= 3; j++){
			if(board[j][i] != 0){
			if(board[j][i - 1] == 0){
				board[j][i - 1] = board[j][i];
				board[j][i] = 0;
				}
			else if(board[j][i - 1] == board[j][i]){
				board[j][i - 1] += board[j][i];
				board[j][i] = 0;
			}	
			}
		}
	}
	
}

function moveRight(){
	for(var i = 0; i < 3; i++){
		for(var j = 0; j <= 3; j++){
			if(board[j][i] != 0){
			if(board[j][i + 1] == 0){
				board[j][i + 1] = board[j][i];
				board[j][i] = 0;
			}
			else if(board[j][i + 1] == board[j][i]){
				board[j][i + 1] += board[j][i];
				board[j][i] = 0;
			}	
		}}
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
	

}
