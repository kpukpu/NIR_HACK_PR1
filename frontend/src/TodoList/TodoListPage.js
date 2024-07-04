import React, {useEffect, useRef, useState} from "react";
import List from "./components/List";
import Form from "./components/Form";

const TodoListPage = () => {
    const [todos, setTodos] = useState([]);
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
        setTodos([...todos, todo]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const resetTodos = () => {
        setTodos([]);
    }

    return (
        <div style={{ margin: '0 auto', maxWidth: '600px', padding: '20px', textAlign: 'center' }}>
            <h1>To-Do 리스트</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
            <button onClick={resetTodos}>초기화</button>
        </div>
    );
}
export default TodoListPage