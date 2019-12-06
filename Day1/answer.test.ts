import { Test, TestCase, TestFixture, Expect } from "alsatian";
import { calculateFuelFromMass, getTotalFuelForMasses, getFuelOnFuel, getTotalFuelForMassesInclFuelOnFuel } from "./answer1";

@TestFixture("Day 1 Tests")
export class Day1Tests {

    @Test("Check Mass to Fuel Calculator")
    @TestCase(12, 2)
    @TestCase(14, 2)
    @TestCase(1969, 654)
    @TestCase(100756, 33583)
    public fuelCalculator(input: number, expectedOutput: number) {
        Expect(calculateFuelFromMass(input)).toBe(expectedOutput);
    }

    @Test("Check List of Mass to Total Fuel Calculator")
    @TestCase([12, 14, 1969, 100756], 34241) // 2 + 2 + 654 + 33583
    public totalFuelCalculator(input: number[], expectedOutput: number) {
        Expect(getTotalFuelForMasses(input)).toBe(expectedOutput);
    }

    @Test("Fuel on Fuel Calculator")
    @TestCase(14, 2)
    @TestCase(1969, 966)
    @TestCase(100756, 50346)
    @TestCase(34241, 17090)
    public fuelOnFuelCalculator(input: number, expectedOutput: number) {
        Expect(getFuelOnFuel(input, 0)).toBe(expectedOutput);
    }

    @Test("Final Total Calculator")
    @TestCase([14, 1969, 100756], 51314) // 2 + 966 + 50346
    public finalTotalFuelCalculator(input: number[], expectedOutput: number) {
        Expect(getTotalFuelForMassesInclFuelOnFuel(input)).toBe(expectedOutput);
    }
}