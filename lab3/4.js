/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
    let out = 0;
    len = arr.length
    for (let i = 0; i < len; i++) {
        if (i % 2 == 0) { out += arr[i]; }
    }
    out *= arr[len - 1];
    return out;
}
/*console.log(prettySum([-5, 15, 32, -1, 0]));*/
module.exports = prettySum;
