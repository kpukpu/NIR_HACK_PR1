import React from "react";
import Item from "./Item";
import { Droppable, Draggable } from "react-beautiful-dnd";

const List = ({ todos, toggleComplete, removeTodo, moveCompletedToTop }) => {
    return (
        <Droppable droppableId="todos">
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            draggableId={todo.id.toString()}
                            index={index}
                            isDragDisabled={moveCompletedToTop && todo.completed} // 드래그 비활성화 조건
                        >
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <Item
                                        todo={todo}
                                        toggleComplete={toggleComplete}
                                        removeTodo={removeTodo}
                                    />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default List;
