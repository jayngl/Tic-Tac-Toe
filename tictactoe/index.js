// TIC TAC TOE

// INNIT
const gridCells = document.querySelectorAll("div");
const winner = document.getElementById("winner");
const p1score = document.getElementById("p1score");
const p2score = document.getElementById("p2score");
let i = 0;



// PLAYER OBJECTS

const player1 = {
    name:"Player 1",
    gamesWon:0,
    hasWon:false,
    marker:"x",
    winMessage: function(){
        winner.textContent = `${this.name} has won`
        p1score.textContent = `X: ${++player1.gamesWon}`;

    } 

}

const player2 = {
    name:"Player 2",
    gamesWon:0,
    hasWon:false,
    marker:"o",
    winMessage: function(){
        winner.textContent = `${this.name} has won`
        p2score.textContent = `O: ${++player2.gamesWon}`;

    } 

}



// TOGGLE PLAYER TURN
let turn = true;

function playerTurn(cell){
    

    if(cell.textContent === ""){

        if(turn){
            cell.textContent = player1.marker ;
        }

        else{
            cell.textContent = player2.marker ;
        }

        turn = !turn;
        i++
    }
}


// CHECK WINNER
function checkWinner(gridCells){

    if(gridCells[0].textContent === gridCells[1].textContent && gridCells[0].textContent === gridCells[2].textContent && gridCells[0].textContent !== "" ||
        gridCells[0].textContent === gridCells[3].textContent && gridCells[0].textContent === gridCells[6].textContent && gridCells[0].textContent !== "" ||
        gridCells[0].textContent === gridCells[4].textContent && gridCells[0].textContent === gridCells[8].textContent && gridCells[0].textContent !== ""
    )
        {
        if(gridCells[0].textContent === player1.marker){
            player1.hasWon = true;
            player1.winMessage()

        }

        else if(gridCells[0].textContent === player2.marker){
            player2.hasWon = true;
            player2.winMessage()


        }
    }


    else if(gridCells[3].textContent === gridCells[4].textContent && gridCells[3].textContent === gridCells[5].textContent && gridCells[3].textContent !== "")
        {
        if(gridCells[3].textContent === player1.marker){
            player1.hasWon = true;
            player1.winMessage();


        }

        else if(gridCells[3].textContent === player2.marker){
            player2.hasWon = true;
            player2.winMessage()

        }
    }

    else if(gridCells[6].textContent === gridCells[7].textContent && gridCells[6].textContent === gridCells[8].textContent && gridCells[6].textContent !== "")
        {
        if(gridCells[6].textContent === player1.marker){
            player1.hasWon = true;
            player1.winMessage();
        }

        else if(gridCells[6].textContent === player2.marker){
            player2.hasWon = true;
            player2.winMessage();
        }
    }


    else if(gridCells[1].textContent === gridCells[4].textContent && gridCells[1].textContent === gridCells[7].textContent && gridCells[1].textContent !== "")
        {
        if(gridCells[1].textContent === player1.marker){
            player1.hasWon = true;
            player1.winMessage();
        }

        else if(gridCells[1].textContent === player2.marker){
            player2.hasWon = true;
            player2.winMessage();
        }
    }


    else if(gridCells[2].textContent === gridCells[5].textContent && gridCells[2].textContent === gridCells[8].textContent && gridCells[2].textContent !== "" ||
            gridCells[2].textContent === gridCells[4].textContent && gridCells[2].textContent === gridCells[6].textContent && gridCells[2].textContent !== ""
    )
        {
        if(gridCells[2].textContent === player1.marker){
            player1.hasWon = true;
            player1.winMessage();
        }

        else if(gridCells[2].textContent === player2.marker){
            player2.hasWon = true;
            player2.winMessage();
        }
    }

    else if(i === 9 && player1.hasWon === false && player2.hasWon === false){
        winner.textContent = "TIE" ;   
    }

    
       
}




// RESTART GAME

function restartGame(){
    if(player1.hasWon === true || player2.hasWon === true || winner.textContent === "TIE"){


        gridCells.forEach((cell)=>{
            cell.textContent = ""
        })

        player1.hasWon = false;
        player2.hasWon = false;
        winner.textContent = "";
        turn = true;
        i = 0;

    }



    


}

let timeOutID;

// MAIN
gridCells.forEach((cell)=>{
   
    cell.addEventListener("click",()=>{
        if(cell.textContent === ""){
            playerTurn(cell);
            checkWinner(gridCells);
            clearTimeout(timeOutID);
           timeOutID =  setTimeout(() => {
                restartGame()
            }, 2000);

            
             }
            
        })

})





