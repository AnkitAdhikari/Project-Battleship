import PubSub from 'pubsub-js';
class GUI {

    gameBoardContainer = document.querySelector('.board-container');
    constructor() {
        PubSub.subscribe('Render GameBoard', (msg, data) => {
            this.renderBoard(data.board);
        })
    }

    cacheDom() {
        this.cells = document.querySelectorAll('.cell')
        this.bindEvent();
    }

    bindEvent() {
        this.cells.forEach(el => el.addEventListener('click', this.attack.bind(this)));
    }

    attack(e) {
        const posX = e.target.dataset.coordx
        const posY = e.target.dataset.coordy
        PubSub.publish('attacked', { posX, posY });
    }

    renderBoard({ board, missedShots }) {
        console.log(board)
        this.gameBoardContainer.innerHTML = '';
        board.forEach((el, i, _) => {
            el.forEach((el, j, _) => {
                if (missedShots.some(el => el[0] == j && el[1] == i)) {
                    this.gameBoardContainer.insertAdjacentHTML('beforeend', `<div class="cell${el !== undefined ? ' ship' : ""} missed" data-coordx="${j}" data-coordy="${i}"></div>`)
                } else {
                    this.gameBoardContainer.insertAdjacentHTML('beforeend', `<div class="cell${el !== undefined ? el.isSunk() ? " sunk" : ' ship' : ""}" data-coordx="${j}" data-coordy="${i}"></div>`)
                }
            })
        })
        this.cacheDom();
    }
}

new GUI;