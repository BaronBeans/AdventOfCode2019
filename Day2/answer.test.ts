import { Expect, Test, TestCase, TestFixture } from "alsatian";
import { addCodes, getCodes, interpret, multiplyCodes } from "./answer";

@TestFixture("Day 2 Tests")
export class Day2Tests {

    @Test("Test get codes - this test checks the op code and if 1 or 2 gets the next 3 numbers to perform the maths")
    @TestCase([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], 0, [1, 9, 10, 3])
    @TestCase([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], 4, [2, 3, 11, 0])
    @TestCase([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], 8, [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])
    public testGetCodes(input: number[], index: number, expectedOutput: number[]) {
        Expect(getCodes(input, index)).toEqual(expectedOutput);
    }

    @Test("Test the adder")
    @TestCase([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], [1, 9, 10, 3], [1, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50])
    public testAddCode(input: number[], codes: number[], expectedOutput: number[]) {
        Expect(addCodes(input, codes)).toEqual(expectedOutput);
    }

    @Test("Test the multiplier")
    @TestCase([1, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50], [2, 3, 11, 0], [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50])
    public testMultiplyCode(input: number[], codes: number[], expectedOutput: number[]) {
        Expect(multiplyCodes(input, codes)).toEqual(expectedOutput);
    }

    @Test("Test the interpreter")
    @TestCase([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50])
    public testInterpreter(input: number[], expectedOutput: number[]) {
        Expect(interpret(input)).toEqual(expectedOutput);
    }
}