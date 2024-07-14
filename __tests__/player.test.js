import Player from "../src/js/models/player";

let player1, player2;

beforeEach(() => {
    player1 = new Player();
    player2 = new Player();
})


test("player 1 places ships", () => {
    player1.gameBoard.placeShip(1, 1);
    expect(player1.gameBoard.board[1][1]).not.toBeUndefined();
})

test("player2 destroys player1 ship", () => {
    player1.gameBoard.receiveAttack(1, 1);
    expect(player1.gameBoard.allShipsSunk()).toBe(true);
})

