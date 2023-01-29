let numbers = [];
// Initialize an empty array called "numbers"

for (let i = 1; i <= 5; i++) {
    numbers.push(i);
    // Add the integers from 1 to 1000 to the "numbers" array
}

let artikleArray = [
    {
        path: "image Comes here",
        name : "Zug (DE) / Train (EN)",
        artikle : "Der",
        desc: "Der Zug is zu schnell"
    },
    {
        path: "image Comes here",
        name : "Katze (DE) / Cat (EN)",
        artikle : "Die",
        desc: "Die Katze ist klug"
    },
    {
        path: "image Comes here",
        name : "Ei (DE) / Egg (EN)",
        artikle : "Das",
        desc: "Des Ei ist gesund"
    },
    {
        path: "image Comes here",
        name : "Maus (DE) / Mouse (EN)",
        artikle : "Die",
        desc: "Die Maus ist sehr schnell"
    },
    {
        path: "image Comes here",
        name : "Buch (DE) / Book (EN)",
        artikle : "Das",
        desc: "Das Buch ist nicht interrsant"
    },   
]
let randomNumbers = [];
// Initialize an empty array called "randomNumbers"

while (numbers.length > 0) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    // Generate a random index between 0 and the length of the "numbers" array
    
    randomNumbers.push(numbers[randomIndex]);
    console.log(artikleArray[randomIndex])
    // Add the element at the random index to the "randomNumbers" array
    
    numbers.splice(randomIndex, 1);
    // Remove the element at the random index from the "numbers" array so that it is not selected again
}
// console.log(randomNumbers);
// Print the "randomNumbers" array to the console
