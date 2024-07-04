import React from "react";
import Item from "./Item";

const List = ({ todos, toggleComplete, removeTodo}) => {
    return (
        <div>
            {todos.map(todo => (
                <Item
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};

export default List;