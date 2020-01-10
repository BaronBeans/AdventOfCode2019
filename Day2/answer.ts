import input from "./input";

const dataForDay2 = input.split(",").map(Number);

export const getCodes = (input: number[], index: number) => {
    switch (input[index]) {
        case 1:
            const addCodes = input.slice(index, index + 4);
            return addCodes;
        case 2:
            const multiplyCodes = input.slice(index, index + 4);
            return multiplyCodes;
        case 99:
            return input;
        default: return;
    }
}

export const addCodes = (input: number[], codes: number[]) => {
    const addA = input[codes[1]];
    const addB = input[codes[2]];

    input[codes[3]] = addA + addB
    return input;
}

export const multiplyCodes = (input: number[], codes: number[]) => {
    const timesA = input[codes[1]];
    const timesB = input[codes[2]];

    input[codes[3]] = timesA * timesB
    return input;
}

export const interpret = (input: number[], noun: number, verb: number) => {
    input[1] = noun;
    input[2] = verb;

    for (let i = 0, length = ~~(input.length / 4); i < length; i++) {
        const codes = getCodes(input, i * 4);

        if (codes?.length === 4) {
            if (codes[0] === 1) {
                input = addCodes(input, codes);
            }
            if (codes[0] === 2) {
                input = multiplyCodes(input, codes);
            }
        }
    }

    return input[0];
}


export const checkForInputs = (input: number[]) => {
    const reset = input;
    for (let n = 0; n < 500; n++) {
        for (let v = 0; v < 500; v++) {
            let array = reset;
            if (interpret(array, n, v) === 19690720) {
                console.log(`Match found - noun: ${n}, verb: ${v}`);
            }
        }
    }
}

// Part 1:
console.log(`Day 2 Part 1: ${interpret(dataForDay2, 12, 2)}`); //6627023

// checkForInputs(dataForDay2);