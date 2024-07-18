import PubSub from 'pubsub-js';
class GUI {
    restartBtn = document.querySelector('.restart-btn');
    playerBoardContainer = document.querySelector('.player');
    computerBoardContainer = document.querySelector('.computer');
    constructor() {
        PubSub.subscribe('Render GameBoard', (msg, data) => {
            this.renderBoard(data.board1, this.playerBoardContainer);
            this.renderBoard(data.board2, this.computerBoardContainer, true);
        })
        PubSub.subscribe('GameOver', (msg, data) => {
            this.displayWinner(data.winner);
        })
    }

    cacheDom() {
        this.cells = this.computerBoardContainer.querySelectorAll('.cell.active');
        this.bindEvent();
    }

    bindEvent() {
        this.cells.forEach(el => el.addEventListener('click', this.attack.bind(this)));
        this.restartBtn.addEventListener('click', this.restart);
    }

    attack(e) {
        const posX = e.target.dataset.coordx
        const posY = e.target.dataset.coordy
        PubSub.publish('attacked', { posX, posY });
    }

    renderBoard({ board, missedShots }, boardContainer, hide) {
        boardContainer.innerHTML = '';
        board.forEach((el, i, _) => {
            el.forEach((el, j, _) => {
                if (missedShots.some(el => el[0] == j && el[1] == i)) {
                    boardContainer.insertAdjacentHTML('beforeend', `<div class="cell${el !== undefined ? hide ? ' ship' : '' : ""} missed" data-coordx="${j}" data-coordy="${i}"></div>`)
                } else {
                    boardContainer.insertAdjacentHTML('beforeend', `<div class="cell${el !== undefined ? el.isSunk() ? " sunk" : hide ? ' active' : ' ship' : " active"}" data-coordx="${j}" data-coordy="${i}"></div>`)
                }
            })
        })
        this.cacheDom();
    }
    displayWinner(winner) {
        this.winnerModel = document.querySelector('.winner-container')
        document.getElementById('winner-name').innerText = winner;
        this.winnerModel.classList.toggle('hidden');
        this.bindCloseBtn();
    }
    bindCloseBtn() {
        this.closeBtn = document.querySelector('.close-btn');
        this.closeBtn.addEventListener('click', () => {
            this.winnerModel.classList.toggle('hidden');
        })
    }
    restart() {
        location.reload();
    }
}

new GUI();