/* Nim Trainer by [Evan Fletcher]
* chart:
*/

 /* based on this flowchart:
 https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 

/* Global Variables */
var trainer = false
var count = 0

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
let again = true 
trainer = prompt("yes or no??");
confirm(trainer); 
playNim(); 
again = prompt("wanna play again?");
if (again == yes)  
    main();
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
    alert("Nim Game played."); 
    let count = 0
    if (count < 21);
    userTurn();
    else alert("YOU LOSE!!!")
    else if (count >= 21);
    cpuTurn();
    if (count < 21 );
    else alert('')




}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
    alert("userTurn successfull");
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
alert("insert cpu yada yada");
}
