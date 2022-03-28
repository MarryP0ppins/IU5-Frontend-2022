/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход     подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]

*/

class part_of_route {
    constructor(obj) {
        this.to = obj.to;
        this.from = obj.from;
        this.route = [obj];
    }
    new_part(obj, beginning) {
        beginning ? this.route.unshift(obj) && (this.from = obj.from) : this.route.push(obj) && (this.to = obj.to)
        return true
    }
}

function merger(ind) {
    for (i = 0; i < this.length; i++) {
        if (this[ind].to == this[i].from) {
            this[ind].route.push(...this[i].route)
            this[ind].to = this[i].to;
            this.splice(i, 1);
            return;
        }
        if (this[i].to == this[ind].from) {
            this[i].route.push(...this[ind].route)
            this[i].to = this[ind].to;
            this.splice(ind, 1);
            return;
        }
    }
}

/*Решил написать используя класс. В лекции не мало времени этому уделили, а использовать где-то кроме этой задачки негде*/
function makeRoute(arr) {
    let route = [];
    arr.map((obj) => {
        flag = true
        for (ind = 0; ind < route.length; ind++) {
            if (obj.to == route[ind].from) {
                (route[ind].new_part(obj, true)) && merger.call(route, ind)
                flag = false
                break
            }
            if (obj.from == route[ind].to) {
                (route[ind].new_part(obj, false)) && merger.call(route, ind)
                flag = false
                break
            }
        }
        flag && route.push(new part_of_route(obj))
    })
    return route.length ? route[0].route : route
}

/*вроде как помедленней должен работать, но намного короче*/
function makeRoute1(arr) {
    const route = []
    const temp = {}
    const value = []
    let from
    arr.map((obj) => {
        temp[obj.from] = obj.to;
        value.push(obj.to);
    })
    for (obj in temp) { if (!value.includes(obj)) { from = obj; break } }
    for (obj in temp) {
        route.push({ 'from': from, 'to': temp[from] })
        from = temp[from]
    }
    return route
}

module.exports = makeRoute;
