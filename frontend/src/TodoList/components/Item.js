import React from "react";

const Item = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc'}}>
            <div style={{ textDecoration: todo.completed ? 'line-through' : ''}}>
                {todo.text}
            </div>
        <div>
            <button onClick={() => toggleComplete(todo.id)}>완료</button>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </div>
    </div>
    );
};

export default Item
