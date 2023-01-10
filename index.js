/*

Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
В користувача є 3 спроби

зробити двома способами через while і for

* це повинна бути функція(можливо і не одна)

*/

// 1

/**
 * 
 * @returns {string | null}
 */
const askUserNumber = function(){
    return prompt("Enter number: ");
}

/**
 * 
 * @param {number} number 
 * @returns {boolean}
 */
const chackCondition = function(number) {
    return (number < 15 || number > 35 || number % 6 > 0);
}

let COUNT_ATTEMPTS = 3;
let iterator = 0

while(iterator < COUNT_ATTEMPTS) {
    const userResponse = askUserNumber();
    if (userResponse === '' || 
        userResponse === null || 
        Number.isNaN(userResponse) || 
        chackCondition(Number(userResponse))) {
        console.log("Try again!!!");
        iterator++;
        continue;
    }
    console.log("Greate!!!");
    break;
}

// 1

for(let i = 0; i < COUNT_ATTEMPTS; i++){
    const userResponse = askUserNumber();
    if (userResponse === '' || 
        userResponse === null || 
        Number.isNaN(userResponse) || 
        chackCondition(Number(userResponse))) {
        console.log("Try again!!!");
        iterator--;
        continue;
    }
    console.log("Greate!!!");
    break;
}