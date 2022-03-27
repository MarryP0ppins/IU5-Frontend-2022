/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
    let result_
    return a = (...args) => {
        cache_ = true;
        (result_ != func(...args)) && (result_ = func(...args)) && (cache_ = false)
        return { 'cache': cache_, 'result': result_ }
    }
}


/*const add = (a) => a * 2;
const memozedAdd = memoize(add)


console.log(
    memozedAdd(1),
    memozedAdd(1),
    memozedAdd(2),
    memozedAdd(1),
    memozedAdd(2),
    memozedAdd(2)
)*/

module.exports = memoize;
