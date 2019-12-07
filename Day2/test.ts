import { TestFixture, Test, TestCase, Expect } from "alsatian";

@TestFixture("This is a test")
export class Test1 {

    @Test("This is a case")
    @TestCase(1, 1)
    public equality(i: number, o: number) {
        Expect(1).toBe(2);
    }
}