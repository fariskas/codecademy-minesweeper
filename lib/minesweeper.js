'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {

	var board = [];

	for (var i = 0; i < numberOfRows; i++) {

		var row = [];

		for (var j = 0; j < numberOfColumns; j++) {

			row.push(' ');
		}

		board.push(row);
	}

	return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {

	var board = [];

	for (var i = 0; i < numberOfRows; i++) {

		var row = [];

		for (var j = 0; j < numberOfColumns; j++) {

			row.push(null);
		}

		board.push(row);
	}

	var numberOfBombsPlaced = 0;

	while (numberOfBombsPlaced < numberOfBombs) {

		/** need to add fix for bombs being overwritten **/

		var randomRowIndex = Math.floor(Math.random() * numberOfRows);
		var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;
	}

	return board;
};

var printBoard = function printBoard(board) {
	console.log(board.map(function (row) {
		return row.join(' | ');
	}).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 3);
var bombBoard = generateBombBoard(3, 3, 2);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);