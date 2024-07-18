import "../css/style.css";

import Player from "./models/player";
class Game {
    constructor() {
        this.init();
        PubSub.publish('Render GameBoard', { board1: this.player1.gameBoard, board2: this.player2.gameBoard })
        PubSub.subscribe('attacked', (msg, data) => {
            console.log(data);
            this.lunchAttack(data.posX, data.posY);
        })
    }
    init() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.activePlayer = this.player1;

        this.placeShipRandom(this.player1.gameBoard);
        this.placeShipRandom(this.player2.gameBoard);
    }

    placeShipRandom(board) {
        const set = new Set();
        let shipPlaced = 0;
        let expectedShipNum = 20;
        while (shipPlaced < expectedShipNum) {
            let coordY = parseInt(Math.floor(Math.random() * 10));
            let coordX = parseInt(Math.floor(Math.random() * 10));
            let location = `${coordX} ${coordY}`;
            if (!set.has(location)) {
                set.add(location);
                board.placeShip(coordX, coordY);
                shipPlaced++;
            }
        }
    }

    lunchAttack(posX, posY) {
        this.player2.gameBoard.receiveAttack(posX, posY)
        this.changeActivePlayer(this.player2)
        this.computerAttack();
        PubSub.publish('Render GameBoard', { board1: this.player1.gameBoard, board2: this.player2.gameBoard })
        this.checkWin();
    }
    changeActivePlayer(newActive) {
        this.activePlayer = newActive;
    }
    checkWin() {
        if (this.player1.gameBoard.allShipsSunk()) {
            PubSub.publish('GameOver', { winner: "Computer" })
        } else if (this.player2.gameBoard.allShipsSunk()) {
            PubSub.publish('GameOver', { winner: "Player" })
        }
    }
    computerAttackPos() {
        const missed = this.player1.gameBoard.missedShots;
        const board = this.player1.gameBoard.board
        while (true) {
            let coordY = parseInt(Math.floor(Math.random() * 10));
            let coordX = parseInt(Math.floor(Math.random() * 10));
            if (missed.every(el => el[0] != coordY || el[1] != coordX)) {
                if (board[coordX][coordY] == undefined || !board[coordX][coordY].isSunk())
                    return [coordY, coordX];
            }
        }
    }
    computerAttack() {
        const [posX, posY] = this.computerAttackPos();
        console.log(posX, posY);
        this.player1.gameBoard.receiveAttack(posX, posY);
        this.changeActivePlayer(this.player1);
    }
}

new Game();