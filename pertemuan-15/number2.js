const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    return numbers.reduce((sum, num) => sum + num, 0);
};

export default addNumber;

