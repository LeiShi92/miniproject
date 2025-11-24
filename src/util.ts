import _ from 'lodash';

export function addNumbers(a: number, b: number): number {
    return _.add(a, b);
}

export function multiplyNumbers(a: number, b: number): number {
    console.log('Multiplying numbers:', a, b);
    return _.multiply(a, b);
}

export function generateRandomNumber(): number {
    console.log('Generating a random number between 1 and 100');
    return Math.floor(Math.random() * 100) + 1;
}
