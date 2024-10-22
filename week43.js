// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
    if (height < 2) {
        return "Height must be at least 2 to draw a tree";
    }

    const width = (height - 1) * 2 - 1;
    let tree = "";

    for (let i = height; i >= 2; i--) {
        const stars = (height - i + 1) * 2 - 1;
        const padding = Math.floor((width - stars) / 2);
        const levelNum = i.toString().padStart(2, " ");
        tree += `${levelNum} ${" ".repeat(padding)}${"*".repeat(stars)}\n`;
    }
    const trunkPadding = Math.floor((width - 1) / 2);
    tree += ` 1 ${" ".repeat(trunkPadding)}x`;

    return tree;
}

console.log(drawTree(5));



/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    if (size < 1) {
        return "Size must be at least 1";
    }

    let arrow = "";

    for (let i = 1; i <= size; i++) {
        arrow += "* ".repeat(i) + "\n";
    }

    for (let i = size - 1; i >= 1; i--) {
        arrow += "* ".repeat(i) + "\n";
    }

    return arrow;
}

console.log(drawArrow(3));

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(height, width) {
    if (height < 1 || width < 1) {
        return "Both dimensions must be at least 1";
    }

    const adjustedWidth = width * 4;
    let box = "";

    box += "+" + "-".repeat(adjustedWidth) + "+\n";

    for (let i = 0; i < height; i++) {
        box += "|" + " ".repeat(adjustedWidth) + "|\n";
    }

    box += "+" + "-".repeat(adjustedWidth) + "+";

    return box;
}

console.log(drawBox(2, 2));

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word) {
    const letters = word.toLowerCase().match(/[a-z]/g) || [];

    return letters.length === new Set(letters).size;
}

console.log(isHeterogram("Hello"));
console.log(isHeterogram("Hi"))

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function isAnagram(word1, word2) {
    const words1 = word1.toLowerCase().replace(/[^a-z]/g, "");
    const words2 = word2.toLowerCase().replace(/[^a-z]/g, "");

    if (words1.length !== words2.length) {
        return false;
    }

    const sortedWord1 = words1.split("").sort().join("");
    const sortedWord2 = words2.split("").sort().join("");

    return sortedWord1 === sortedWord2;
}

console.log(isAnagram("Listen", "Silent"));
console.log(isAnagram("Listen", "Silence"));
