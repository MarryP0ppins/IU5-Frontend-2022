/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */

function capitalize(str) {
    const len = str.length;
    let flag = true;
    for (let i = 0; i < len; i++) {
        if (flag && str.charAt(i) != ' ') {
            str = str.substr(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1);
            flag = false;
        }
        if (str.charAt(i) == ' ') flag = true;
    }

    return str;
}

/*console.log(capitalize("я вижу солнце"));*/
module.exports = capitalize;
