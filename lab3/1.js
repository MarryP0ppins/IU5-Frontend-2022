/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    str = str.split(' ');
    let out = "";
    len = str.length;
    for (let i = 0; i < len - 1; i++) {
        out += str[i][0].toUpperCase() + str[i].substring(1) + ' ';
    }
    out += str[len - 1][0].toUpperCase() + str[len - 1].substring(1);
    return out;
}

/*console.log(capitalize("я вижу солнце"));*/
module.exports = capitalize;
