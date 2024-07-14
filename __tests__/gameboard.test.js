import Gameboard from "../src/js/models/gameboard"

let gameBoard;

beforeEach(() => {
    gameBoard = new Gameboard();
})

test('ship on the gameboard', () => {
    gameBoard.placeShip(1, 1);
    expect(gameBoard.board[1][1]).not.toBeUndefined();
})

test('ship under attack', () => {
    gameBoard.placeShip(1, 1);
    gameBoard.receiveAttack(1, 1);
    expect(gameBoard.board[1][1].isSunk()).toBe(true);
})

test('shot missed', () => {
    gameBoard.placeShip(1, 1);
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(5, 1);
    expect(gameBoard.missedShots).toStrictEqual([[0, 0], [5, 1]])
})

test('all ships sank', () => {
    expect(gameBoard.allShipsSunk()).toBe(true);
    gameBoard.placeShip(1, 1);
    gameBoard.placeShip(2, 2);
    expect(gameBoard.allShipsSunk()).toBe(false);
    gameBoard.receiveAttack(1, 1);
    gameBoard.receiveAttack(2, 2);
    expect(gameBoard.allShipsSunk()).toBe(true);
})