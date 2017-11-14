import * as React from 'react'

const TodoItem = ({onToggle, onRemove, completed, text}: 
                    {
                        onToggle: () => void,
                        onRemove: () => void,
                        completed: boolean,
                        text: string
                    }) => {
    const checkedProp = completed ? {checked: true} : {}
    return (
        <li
            className="todo-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
                <input
                    className="toggle"
                    type="checkbox"
                    {...checkedProp}
                    readOnly={true}
                    onClick={onToggle}
                />
                <label className="text">{text}</label>
                <button 
                    className="remove"
                    onClick={onRemove}
                >
                    x
                </button>
        </li>                
    )
                    }

export default TodoItem