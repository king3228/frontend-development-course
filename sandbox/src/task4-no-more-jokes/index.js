/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    if (typeof leftOperand !== 'number' && typeof rightOperand !== 'number') {
        throw new Error("Operands are not numbers");
    }
    if (typeof leftOperand !== 'number') {
        throw new Error("The left operand is not number");
    }
    if (typeof rightOperand !== 'number') {
        throw new Error("The right operand is not number");
    }

    return leftOperand + rightOperand;
};
