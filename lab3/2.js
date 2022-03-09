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
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        temp = parseFloat(str[i]);
        if (temp > Max) { Max = temp; }
        if (temp < Min) { Min = temp; }
        continue;
    }
    let out = { 'min': Min, 'max': Max };
    return (out);
}

/*console.log(getMinMax('-2.5 ddd 1 nfuey 222.345 w 0'));*/
module.exports = getMinMax;
