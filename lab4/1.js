/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */


function getAnagramms(arr) {
    out = {}
    arr.map((str) => {
        anagramm = str.toLowerCase().split('').sort().join('');
        out[anagramm] ? out[anagramm].push(str) : out[anagramm] = [str];
    })
    return Object.values(out);
}


//console.log(getAnagramms(["мир", "222"]))
module.exports = getAnagramms;
