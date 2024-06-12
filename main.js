//                             Assignment no 03
//                            Creating a lesson plan using for loop
var mywork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson ".concat(i),
        status: i % 2 === 1
    };
    mywork.push(lesson);
}
console.log(mywork);
//                            Guessing Game Using While Loop
var maxValue = 10;
var randomNum = (Math.floor(Math.random() * maxValue + 1));
console.log(randomNum);
var guessed = false;
var guessNum = [2, 3, 6, 1, 7, 9, 5, 8];
var j = 0;
while (!guessed && j < guessNum.length) {
    if (guessNum[j] === randomNum) {
        console.log("Congratulations you guess a right number:".concat(randomNum));
        guessed = true;
    }
    else if (guessNum[j] < randomNum) {
        console.log("Your guess ".concat(guessNum[j], " is too low"));
    }
    else {
        console.log("Your guess ".concat(guessNum[j], " is too high"));
    }
    j++;
}
//                              Counter incrementer using do while loop
var counter = 0;
var step = 5;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
//                               Exploring Object with for in Loop
var myObject = {
    item1: "Watch",
    item2: "Wallet",
    item3: "Phone"
};
for (var key in myObject) {
    console.log("key:", myObject[key]);
}
//                               Exploring Arrays with loops
var myArray = [];
for (var n = 1; n <= 10; n++) {
    myArray.push(n);
}
console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("index: ".concat(i, ", Value: ").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log(value);
}
