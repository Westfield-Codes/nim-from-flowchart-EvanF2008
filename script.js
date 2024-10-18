/* Nim Trainer by [Evan Fletcher]
* chart:
*/

 /* based on this flowchart:
 https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 

/* Global Variables */
var trainer = false;
var count = 0;

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main() {
    let again = false;
    trainer = confirm("trainer??");
    playNim();
    again = confirm("u wanna play again??");
    if (again == true) main();
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
alert("playnim functionally");
let count = 0;
while(count < 21){
    userTurn();
    if (count > 20) alert('you lose major L');
        else{
            cpuTurn();
            if(count > 20) alert("You win :( cpu sad");
        }
    }
}
/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
let turn= prompt("INPUT 1 or 2 or 3");
turn = parseInt(turn);
if (turn < 1 || turn > 3 ){
    alert("alert your input is nonsense");
    userTurn();
}
else {
count+= turn;
alert("count is now "+count);
}
alert("userturn done sassy");
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
    if (count == 17) turn = 3;
    else if (count == 18) turn = 2;
    else if (turn > 18) turn = 1;
    else if (trainer == true) turn =4-count%4;  
    else turn = Math.floor(math.random)(3+1);
    count+= turn;
    alert("I counted " +turn+ "count is now " + count );
alert("cpuTurn done cutely >:3");
}
