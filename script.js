var square1 = document.getElementsByClassName("inside");

var arr = Array.prototype.slice.call(square1);

var boardPositions = ["", "", "", "", "", "", "", "", ""];

var winingPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [2, 5 ,8],
  [2, 4, 6]
]

var win = false;

var playTimes = 0
var turn = "X"

arr.forEach(div => {
  div.addEventListener("click", () => {

    if (div.textContent){
      alert("Não pode jogar no mesmo lugar que foi colocado o outro ")
      return
    }

    div.innerHTML = `<h1>${turn}</h1>`
   

    boardPositions.splice(div.id, 1, turn);

    for (let i = 0; i < winingPositions.length; i++){
      if(boardPositions[winingPositions[i][0]] === turn && boardPositions[winingPositions[i][1]] === turn && boardPositions[winingPositions[i][2]] === turn){
          alert(`O vencedor foi  ${turn}`)
          win = true
        }
    }

    if (win){
      resetAll()
      playTimes = 0
      return
    }

    turn = turn === "X" ? "O" : "X";    

    playTimes++

    checkTie()
  })
})





function resetAll(){
  for (i in boardPositions){
    boardPositions[i] = ""
  }

  arr.forEach(div => {
    div.innerHTML = ""
  })

  win = false;

}

function checkTie(){
  if (playTimes > 8){
    alert("Deu velha");

    playTimes = 0;

    resetAll();
  }
}