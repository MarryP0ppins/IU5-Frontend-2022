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


function curry(fn) {
    return concatenate = (...args) => {
        if (args.length < fn.length) return (...args_next) => concatenate.apply(this, args.concat(args_next))
        else return fn(...args)
    }
}


/*function add(a, b, c) {
    return a + b + c;
}

let a = curry(add)(1)(2);
console.log('a = ',a);
console.log('a(3) = ',a(3))*/


module.exports = curry;
