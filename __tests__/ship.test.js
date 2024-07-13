import Ship from "../src/js/models/ship";

test("ship has correct length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
})

test("ship is getting hit", () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
})

test("ship got destroyed", () => {
    const ship = new Ship(1);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})