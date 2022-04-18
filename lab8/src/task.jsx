import React, { useState } from "react";

const Task = ({ toDo, changeStatus, changeToDo }) => {
    const [chngActive, changeActive] = useState(false)
    const [chngValue, changeValue] = useState(toDo.title)

    return (
        <div className="item">
            <input
                type='checkbox'
                className="check"
                checked={toDo.done}
                onChange={() => changeStatus(toDo.id)} />
            <input
                type='text'
                className={`title ${toDo.done ? 'done' : ''} ${chngActive}`}
                value={`${chngValue}`}
                onChange={(event) => { changeValue(event.target.value); changeActive(true) }}
            />
            <input
                type="button"
                className={`change ${chngActive}`}
                value="ОК"
                onClick={() => { changeToDo(toDo.id, chngValue); changeActive(false) }}
            />
        </div>
    )
}

export default Task