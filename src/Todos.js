import React from 'react'


const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span contenteditable="true">{todo.content}</span>
                    <i className="material-icons right" onClick={() => { deleteTodo(todo.id) }}>delete_sweep</i>
                    <i className="material-icons right">edit</i>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos