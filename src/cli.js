#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getUserName = () => {
    const name = readlineSync.question('May I have your name? ');

    return name;
};
export default getUserName;