import Ship from "./ship";

export default class Gameboard {
    board = [[], [], [], [], [], [], [], [], [], []];
    missedShots = []
    ships = []
    constructor(coordX, coordY) {
    }

    placeShip(coordX, coordY) {
        if (coordX >= 0 && coordX <= 9 && coordY >= 0 && coordY <= 9) {
            const newShip = new Ship(1);
            this.board[coordY][coordX] = newShip;
            this.ships.push(newShip);
        }
    }
    receiveAttack(coordX, coordY) {
        const el = this.board[coordY][coordX];
        if (el instanceof Ship) {
            el.hit();
        } else {
            this.missedShots.push([coordX, coordY]);
        }
    }
    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
}