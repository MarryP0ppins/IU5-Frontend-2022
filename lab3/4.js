/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
    const mul = arr.at(-1);
    return arr.reduce((accumulator, currentValue, index) => index % 2 == 0 ? accumulator += currentValue * mul : accumulator, 0);
}
/*console.log(prettySum([0, 0, 0, 4, 4, 4]));*/
module.exports = prettySum;
