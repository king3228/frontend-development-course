
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const history = [initialCommit.slice()];

    return {
        head() {
            return history[history.length - 1];
        },
        history() {
            return history;
        },
        push(element) {
            const newArray = this.head().slice();
            newArray.push(element);
            history.push(newArray);
        },
        pop() {
            const newArray = this.head().slice();
            const poppedElement = newArray.pop();
            history.push(newArray);
            return poppedElement;
        }
    };
};
