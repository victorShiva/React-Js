

export function generateTicket(n) {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

export const sum = (arr) => arr.reduce((accu, curr) => accu + curr, 0);