
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    if (num < 10) {
        return num;
    }

    function multiplyDigits(num) {
        return num.toString().split('').reduce((product, digit) => product * parseInt(digit, 10), 1);
    }

    while (num >= 10) {
        num = multiplyDigits(num);
    }

    return num;
};
