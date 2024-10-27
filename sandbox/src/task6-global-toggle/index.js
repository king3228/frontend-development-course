
/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    // Найти все элементы с переданным классом и элементы с активным вариантом этого класса
    const elements = document.querySelectorAll(`.${className}, .${className}_active`);

    // Если ни одного элемента не найдено, прекращаем работу
    if (elements.length === 0) {
        return;
    }

    // Меняем класс для всех найденных элементов
    elements.forEach(element => {
        if (element.classList.contains(`${className}_active`)) {
            element.classList.remove(`${className}_active`);
            element.classList.add(className);
        } else if (element.classList.contains(className)) {
            element.classList.remove(className);
            element.classList.add(`${className}_active`);
        }
    });
};
