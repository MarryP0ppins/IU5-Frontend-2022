/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b: 2})() -> 3
 */

function customBind(f, context) {
    return (...args) => f.call(context, ...args)

    /* если вообще не используя bind, apply и call, то можно сделать так:
     * this.__proto__ = context
     * return (...args) => f(...args)
     */
}


/*function add3(a, c, d) {
    return a + c + d + this.b;
}

console.log(
    customBind(add3, { b: 2 })(1, 2, 3),
    customBind(function () { return this.a + this.b }, { a: 1, b: 2 })()


)


console.log(
    [1, 2, 3].map(function (x) { return x * 3 })
)*/


module.exports = customBind;