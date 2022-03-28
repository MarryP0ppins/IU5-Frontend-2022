/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */


function curry(f) {
    return concatenate = (...args) => {
        return (args.length < f.length) ? (...args_next) => concatenate.apply(this, args.concat(args_next)) : f(...args)
    }
}


module.exports = curry;
