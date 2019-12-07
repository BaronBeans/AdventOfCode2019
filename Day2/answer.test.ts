import { TestFixture, Test, TestCase, Expect } from "alsatian";

@TestFixture("Day 2 Tests")
export class Day2Tests {

    @Test("First Test")
    @TestCase(1, 1)
    @TestCase(2, 2)
    @TestCase(3, 3)
    @TestCase(4, 4)
    public testOne(input: number, expectedOutput: number) {
        Expect(input).toBe(expectedOutput);
    }
}