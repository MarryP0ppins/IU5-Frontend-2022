import './App.css';
import React, { useState } from 'react';
import Task from './task'


function App() {
    const [valueToDo, setValue] = useState('')
    const [toDos, setToDo] = useState([])
    const [count, oneMore] = useState(1)

    const makeToDo = () => {
        if (valueToDo.trim()) {
            setToDo([...toDos, {
                id: count,
                title: valueToDo,
                done: false
            }])
            oneMore((prev) => prev = prev + 1)
        } else alert('Нет задачи')
        setValue('')
    }

    const changeToDo = (idToDo, chngValue) => {
        setToDo(
            toDos.map((toDo) => (
                toDo.id === idToDo
                    ? { ...toDo, title: chngValue }
                    : { ...toDo }
            ))
        )
    }

    const changeStatus = (idToDo) => {
        setToDo(
            toDos.map((toDo) => (
                toDo.id === idToDo
                    ? { ...toDo, done: !toDo.done }
                    : { ...toDo }
            ))
        )
    }
    //console.log(toDos)
    return (
        <div className="App">
            <span className="Name">To Do</span>
            <form className="input">
                <input
                    type="text"
                    className="newToDo"
                    placeholder="Введите новую задачу..."
                    value={valueToDo}
                    onChange={(event) => setValue(event.target.value)}
                />
                <input
                    type="button"
                    className="makeToDo"
                    value="Добавить"
                    onClick={() => makeToDo()}
                />
            </form>
            <div className="toDoList">
                {toDos.map(toDo => (
                    <Task
                        key={toDo.id}
                        toDo={toDo}
                        changeStatus={changeStatus}
                        changeToDo={changeToDo}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
