/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */



function isPalindrome(str) {
    for (i = 0; i < str.length / 2; i++) {
        if (str.at(i) != str.at(-1 - i)) return false
    }
    return true
}

// Жестких требований к краткости и использования методов js не было,
// поэтому написал как мне привычнее.
// Если нужно, могу через reverse написать
 

//console.log(isPalindrome("awddw2a"))
module.exports = isPalindrome;
