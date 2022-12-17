let color = 'black';

function populate(num) {
    let board = document.querySelector('.grid');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${num} , 1fr)`;
    
    let amount = num * num ;
    for (let i = 0; i < amount ; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover',colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend',square);
    
    }
}
populate(16)


function changeSize(input){
    if (input >= 2 || input <=100 ){
        populate(input)
    }else{
        console.log('invalid number of squares enter a number between 2 and 100')
    }
    
}

function colorSquare(){
    if((color == 'random')){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    } else {
    this.style.backgroundColor = color
}   
}

function changeColor(choice){
    color = choice
}

function reset(){
    let board = document.querySelector('.grid');
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=> div.style.backgroundColor = 'white')
}
