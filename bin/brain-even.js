#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log("brain-even \n")

console.log("Welcome to the Brain Games!");

const username = readlineSync.question('May I have your name? ');
let gameCountes = 3;

const game = () => {

    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);    
    let randomNumb = Math.random() * 100;
    randomNumb = parseInt(randomNumb);

    console.log(`Question: ${randomNumb}`);

    const answer = readlineSync.question(`Your answer: `);


    if(answer == 'yes'){
        if(randomNumb % 2 === 0){
            console.log('Correct!');
            
        }else{
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
            console.log(`Let's try again ${username}`);
        }
    }else if(answer == 'no'){
        if(randomNumb % 2 !== 0){
            console.log('Correct!');
            
        }else{
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
            console.log(`Let's try again ${username}`);
        }
    }



    gameCountes --;
    chetnoyeGame();
};

const chetnoyeGame = () => {

    if (gameCountes > 0) {
        game();
    }else{
        console.log(`Congratulations, ${username}`);
    }
}

chetnoyeGame();
