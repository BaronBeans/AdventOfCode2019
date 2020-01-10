import { Test, TestFixture, TestCase, Expect } from "alsatian";
import { getDimensionsForArray } from "./answer";

@TestFixture("Day 3 Tests")
export class Day3Tests {

    @Test("test getDimensions")
    @TestCase('R75,D30,R83,U83,L12,D49,R71,U7,L72,U62,R66,U55,R34,D71,R55,D58,R83')
    public testGetDimensions(input: string, expectedOutcome: { x: number, y: number }) {
        Expect(getDimensionsForArray(input.split(","))).toBe(expectedOutcome);
    }
}