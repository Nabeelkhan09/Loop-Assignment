//                             Assignment no 03

//                            Creating a lesson plan using for loop

let mywork :{name: string, status: boolean} [] = [];

for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `lesson ${i}`,
        status: i % 2 === 1
    };
    mywork.push(lesson);
}

console.log(mywork);

//                            Guessing Game Using While Loop

let maxValue: number = 10;

let randomNum: number = (Math.floor(Math.random() * maxValue +1 ));

console.log(randomNum);

let guessed: boolean = false;
let guessNum: number[] = [2,3,6,1,7,9,5,8];

let j = 0;
while(!guessed && j < guessNum.length) {
    if (guessNum[j] === randomNum){
        console.log(`Congratulations you guess a right number:${randomNum}`)
        guessed = true;
    }
    else if (guessNum[j]< randomNum){
        console.log(`Your guess ${guessNum[j]} is too low`);
    }
    else{
        console.log(`Your guess ${guessNum[j]} is too high`);
    }
    j++;
}

//                              Counter incrementer using do while loop

let counter = 0;
let step = 5;

do {
    console.log(counter);
    counter += step;
}
while(counter < 100);

//                               Exploring Object with for in Loop

let myObject = {
    item1: "Watch",
    item2: "Wallet",
    item3: "Phone"
};

for (let key in myObject) {
    console.log(`key:`,myObject[key]);
}

//                               Exploring Arrays with loops

let myArray: number[] = [];
for (let n = 1;n <= 10; n++) {
    myArray.push(n);
}
console.log(myArray);

for (let i = 0;i < myArray.length;i++){
    console.log(`index: ${i}, Value: ${myArray[i]}`)
}
for (let value of myArray) {
    console.log(value);
}