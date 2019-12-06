import { Expect, Test, TestFixture } from "alsatian";

@TestFixture("Day 1 Tests")
export class Day1Tests {

    @Test("Check 1 = 1")
    public oneEqualsOne() {
        Expect(1).toBe(1);
    }

    @Test("Check 1 = 2")
    public oneEqualsTwo() {
        Expect(1).toBe(2);
    }
}