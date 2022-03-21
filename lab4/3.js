/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    out = '', count = 1
    str.split('').concat(' ').reduce((prev, char) => {
        char != prev ? (out += prev + (count > 1 ? count : '')) && (count = 1) : count++;
        return char;
    })
    return out
}


//console.log('-' + rle("BBBBBBBBBBBBBBBBBBBBBBBBBBBBB") + '-')
module.exports = rle;
