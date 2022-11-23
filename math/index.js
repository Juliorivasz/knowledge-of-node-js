export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    return x / y;
}

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }

// equivalente a lo de arriba es : 

export default {
    add,
    subtract,
    multiply,
    divide
};