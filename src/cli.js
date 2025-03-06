#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getName = () => {
    const name = readlineSync.question('Your answer: ', {
        hideEchoBack: true
    });

    return name;
}

export default getName;