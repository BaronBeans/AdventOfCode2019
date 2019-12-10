import input from "./input";

const dataForDay2 = input.split(",").map(x => +x);
dataForDay2[1] = 12;
dataForDay2[2] = 2;

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

export const interpret = (input: number[]) => {
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

    return input;
}

export const getFinalValue = (input: number[]) => input.length > 0 ? input[0] : undefined;

console.log(`Day 2 Part 1: ${getFinalValue(interpret(dataForDay2))}`);