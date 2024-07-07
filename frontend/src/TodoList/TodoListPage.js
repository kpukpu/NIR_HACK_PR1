import React, { useEffect, useRef, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./components/List";
import Form from "./components/Form";
import Switch from "./components/Switch";

const TodoListPage = () => {
    const [todos, setTodos] = useState([]);
    const [moveCompletedToTop, setMoveCompletedToTop] = useState(false);
    const isInitialMount = useRef(true);

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const addTodo = (todo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    };

    const toggleComplete = (id) => {
        setTodos(prevTodos => {
            const newTodos = prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            return moveCompletedToTop ? sortTodos(newTodos) : newTodos;
        });
    };

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const resetTodos = () => {
        setTodos([]);
    }

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTodos(moveCompletedToTop ? sortTodos(items) : items);
    };

    const toggleMoveCompletedToTop = () => {
        setMoveCompletedToTop(!moveCompletedToTop);
        setTodos(prevTodos => sortTodos(prevTodos));
    };

    const sortTodos = (todos) => {
        if (moveCompletedToTop) {
            return [
                ...todos.filter(todo => todo.completed),
                ...todos.filter(todo => !todo.completed)
            ];
        }
        return todos;
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ margin: '0 auto', maxWidth: '600px', padding: '20px', textAlign: 'center' }}>
                <h1>To-Do 리스트</h1>
                <Form addTodo={addTodo} />
                <Switch
                    text="완료된 항목 위로 이동"
                    onClick={toggleMoveCompletedToTop}
                    moveCompletedToTop={moveCompletedToTop}
                />
                <List
                    todos={sortTodos(todos)}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                    moveCompletedToTop={moveCompletedToTop}
                />
                <button onClick={resetTodos}>초기화</button>
            </div>
        </DragDropContext>
    );
}

export default TodoListPage;