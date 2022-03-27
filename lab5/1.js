/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */



Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        console.log(`${callback} is not a function`)
        throw TypeError()
    }
    const out = []
    this.reduce((_, current, ind, arr) => {
        out[ind] = callback.call(thisArg, current, ind, arr)
    }, 0)
    return out
}

/*ar = [1, 2, 3]

console.log(ar.myMap([1, 2, 3]))

console.log(
    ar.myMap((x) => x * 2),
    ['1', '2', '3'].myMap(parseInt),
    [].myMap((x) => x * 2),
    ["Bilbo", "Gandalf", "Nazgul"].myMap(item => item.length),
    ar.myMap(function (item, index, array) {
        return item * 3;
    }),
    ar.myMap(function (x) { return x * this.windowSize }, { windowSize: 10 })
)*/