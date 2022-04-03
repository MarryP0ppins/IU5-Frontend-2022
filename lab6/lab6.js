//task_1
const task_1 = document.getElementById('task_1')
const getRandom = () => { return Math.floor(Math.random() * 255) }
task_1.addEventListener('click', () => {
    c1 = getRandom(); c2 = getRandom(); c3 = getRandom();
    task_1.style.backgroundColor = 'rgb(' + [c1, c2, c3].join(',') + ')'
    task_1.style.color = (0.2126 * c1 + 0.7152 * c2 + 0.0722 * c3 >= 165) ? 'black' : 'white'
    //нашел какую-то формулу для контрастного цвета
})


//task_2
const task_2 = document.getElementById('task_2')
let sec = 0;
task_2.addEventListener('mouseenter', () => {
    stopwatch = setInterval(() => { task_2.innerHTML = sec++ }, 1000)
})
task_2.addEventListener('mouseleave', () => clearInterval(stopwatch))


//task_3
const task_3 = document.getElementById('task_3')
const menu = document.getElementById('menu')
task_3.addEventListener('click', () => {
    menu.classList.toggle('visible')
})


//task_4
const ball = document.getElementById('ball')
const task_4 = document.getElementById('task_4')
const ball_height = ball.offsetHeight / 2
const ball_width = ball.offsetWidth / 2
let click = false
ball.addEventListener("click", () => { click = true })
document.addEventListener("keydown", (event) => { (event.code == "Escape") && (click = false) })
ball.addEventListener("mousemove", (event) => {
    if (click) {
        const X = event.pageX - task_4.offsetLeft
        const Y = event.pageY - task_4.offsetTop
        if (X > ball_width && X < task_4.offsetWidth - ball_width && Y > ball_height && Y < task_4.offsetHeight - ball_height) {
            ball.style.left = (X - ball_width) + 'px'
            ball.style.top = (Y - ball_height) + 'px'
        }
    }
})


//task_5
let flag = true
function magic() {
    const list = document.getElementById('list')
    list.classList.toggle('visible')
    if (flag) {
        fetch('https://www.breakingbadapi.com/api/episodes', { method: 'get' })
            .then((response) => response.json())
            .then((data) => {
                data.map((x, ind) => {
                    const newChild = document.createElement('li')
                    newChild.innerText = ind + 1 + ') ' + x.title
                    newChild.setAttribute('id', 'title')
                    list.append(newChild)
                })
            })
        flag = false;
    }
}