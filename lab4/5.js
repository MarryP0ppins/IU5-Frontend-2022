/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    check = Array(0), brackets = { ']': '[', '>': '<', ')': '(' }
    str = str.split('');
    for (const elem of str) {
        if (Object.values(brackets).includes(elem)) check.push(elem)
        else if (check.pop() != brackets[elem]) return false
    }
    return true
}


//console.log(checkBrackets('([)]()<>'))
module.exports = checkBrackets;
