import input from "./input";

const listOfMasses = input.split("\n").map(n => parseInt(n, 10));

export const calculateFuelFromMass = (mass: number) => Math.floor(mass / 3) - 2;

export const getTotalFuelForMasses = (masses: number[] = listOfMasses) => {
    return masses.map(m => calculateFuelFromMass(m)).reduce((acc, cur) => acc + cur);
}

export const getFuelOnFuel = (fuel: number, total: number): number => {
    const newFuel = calculateFuelFromMass(fuel);
    if (newFuel > 0) {
        return getFuelOnFuel(newFuel, total + newFuel);
    }
    return total;
}

export const getTotalFuelForMassesInclFuelOnFuel = (masses: number[] = listOfMasses) => {
    return masses.map(m => {
        const fuelForMass = calculateFuelFromMass(m);
        const fuelForFuel = getFuelOnFuel(fuelForMass, 0);

        return fuelForMass + fuelForFuel;
    }).reduce((acc, cur) => acc + cur);
}

console.log(`Part 1: ${getTotalFuelForMasses()}`); //3448043
console.log(`Part 2: ${getTotalFuelForMassesInclFuelOnFuel()}`); //5169198