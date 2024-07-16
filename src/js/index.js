import "../css/style.css";

import Player from "./models/player";
class Game {
    constructor() {
        this.init();
        PubSub.publish('Render GameBoard', { board: this.player1.gameBoard })
        PubSub.subscribe('attacked', (msg, data) => {
            console.log(data);
            this.lunchAttack(data.posX, data.posY);
        })
    }
    init() {
        this.player1 = new Player();
        this.player2 = new Player();
        // active player is 2
        this.activePlayer = this.player2;

        this.placeShipRandom(this.player1.gameBoard);
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
        if (this.activePlayer == this.player1) {
            this.player2.gameBoard.receiveAttack(posX, posY)
            this.changeActivePlayer(this.player2)
        } else {
            this.player1.gameBoard.receiveAttack(posX, posY);
            this.changeActivePlayer(this.player1);
        }
        PubSub.publish('Render GameBoard', { board: this.player1.gameBoard })
    }
    changeActivePlayer(newActive) {
        this.activePlayer = newActive;
    }
}

new Game();