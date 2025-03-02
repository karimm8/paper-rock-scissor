/* select item */

const res = document.getElementById("res");
const player = document.getElementById("player");
const user = document.getElementById("user");
const Splayer = document.getElementById("playerScore");
const Suser = document.getElementById("userScore");
let counterP = 0;
let counterU = 0;
const choix = ["scissor","paper","rock"]
Splayer.textContent += counterP;
Suser.textContent += counterU;
play = (p) =>{
    const pc = choix[Math.floor(Math.random()*choix.length)]
    let result = "";
  
   
   if(pc === p){
    result = "I tied"
   }
else {
    switch (p) {
        case "scissor":
            result = (pc === "paper") ? "You Win" : "You Lost"
            break;
        case "paper":
            result = (pc === "rock") ? "You Win" : "You Lost"
            break;
        case "rock":
            result = (pc === "scissor") ? "You Win" : "You Lost"
            break;
       }
}
  
   res.textContent = result
   player.textContent = p;
   user.textContent = pc;
   res.classList.remove("red","green")
   
   switch (result) {
    case "You Win":
        res.classList.add("green")
        counterP++
        Splayer.textContent = counterP;
        break;
    case "You Lost":
        res.classList.add("red")
        counterU++
        Suser.textContent = counterU;
        break;
   }

}
