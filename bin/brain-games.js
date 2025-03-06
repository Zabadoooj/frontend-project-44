#!/usr/bin/env node
import getUserName from '../src/cli.js';
import readlineSync from 'readline-sync';


console.log("Welcome to the Brain Games!");

const username = getUserName();


const chetnoyeGame = () => {

    const randomNumb = Math.random() * 100;

    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${parseInt(randomNumb)}`);
    const answer = readlineSync.question("Your answer: ");
    

    if(answer === "yes"){
        if(parseInt(randomNumb) % 2 === 0){
            console.log("Correct!");

        }else{
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'")
            console.log(`Let's try again, ${username}`)

        }
        
    }else if(answer === "no"){
        if(parseInt(randomNumb) % 2 !== 0){
            console.log("Correct!");

        }else{
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'")
            console.log(`Let's try again, ${username}`)

        }

    }else{
        console.log(`Only "yes" or "no"`);
        
    }
};
chetnoyeGame()