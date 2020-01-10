const testInput = `R75,D30,R83,U83,L12,D49,R71,U7,L72,U62,R66,U55,R34,D71,R55,D58,R83`;
const inputArray = testInput.split(",");

export const getDimensionsForArray = (input: string[]) => {
    const up = [];
    const down = [];
    const left = [];
    const right = [];

    for (let coord of input) {
        if (coord.startsWith("U")) {
            up.push(parseInt(coord));
        }
        if (coord.startsWith("D")) {
            down.push(parseInt(coord));
        }
        if (coord.startsWith("L")) {
            left.push(parseInt(coord));
        }
        if (coord.startsWith("R")) {
            right.push(parseInt(coord));
        }
    }

    console.log(up);
    console.log(down);
    console.log(left);
    console.log(right);

    const x = Math.abs(right.reduce((a, b) => a + b) - left.reduce((a, b) => a + b));
    const y = Math.abs(up.reduce((a, b) => a + b) - down.reduce((a, b) => a + b));

    console.log(`X: ${x}`);
    console.log(`Y: ${y}`);
    return { x, y };
}

getDimensionsForArray(inputArray);