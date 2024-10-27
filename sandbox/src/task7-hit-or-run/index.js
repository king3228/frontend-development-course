
/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    if (a > b) {
        throw new Error("a должно быть меньше или равно b");
    }

    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    return isPrime(randomNum) ? 'run' : 'hit';
};
