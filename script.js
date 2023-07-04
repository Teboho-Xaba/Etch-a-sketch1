let color = 'black'
let click = true

function boardDisplay(size){
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size
    for(let i = 0; i <= amount; i++){
        let square = document.createElement('div')
        square.addEventListener('mouseover', squareColor)
        square.style.backgroundColor = 'white'
        board.insertAdjacentElement("beforeend", square)
    }
}

boardDisplay(16)

function sizer(input) {
    if(input >= 2 || input <= 100){
    boardDisplay(input)
    }
    else {
        prompt("Invalid Square Input")
    }
}

function squareColor () {
    if(click) {
        if(color === 'random' ){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = color
        }
    }
}

function colorChange(choice) {
    color = choice
}

function boardReset() {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = 'white')
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON'){
        click = !click 
    if (click) {
        document.querySelector('.click').innerHTML = 'Mode: Color ON'
    }
    else {
        document.querySelector('.click').innerHTML = 'Mode: Color OFF'
    }
    }
})