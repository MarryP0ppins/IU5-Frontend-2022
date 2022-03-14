/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */


function getMinMax(str) {
    let Min = Infinity, Max = -Infinity;
    str.split(' ').map((x) => {
        temp = parseFloat(x);
        temp > Max && (Max = temp);
        temp < Min && (Min = temp);
    })
    return { 'min': Min, 'max': Max };
}

/*console.log(getMinMax("4 и -6, 2, 1, может 9, 63, -134 и 566]"));*/
module.exports = getMinMax;
