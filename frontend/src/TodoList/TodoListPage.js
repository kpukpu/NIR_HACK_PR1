import React, {useEffect, useRef, useState} from "react";
import List from "./components/List";
import Form from "./components/Form";
import axios from "axios";

const TodoListPage = () => {
    const [todos, setTodos] = useState([]);
    const isInitialMount = useRef(true);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/todos');
            //setTodos(response.data);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch todos: ", error);
        }
    }

    const saveTodos = async (todos) => {
        try {
            await axios.post('/api/todos', todos); // REST API의 엔드포인트에 맞게 수정
        } catch (error) {
            console.error("Failed to save todos:", error);
        }
    }

    useEffect(async () => {
        const savedTodos = fetchTodos();
        /*if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }*/
        if (savedTodos) {
            setTodos(await savedTodos);
        }
    }, []);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            //localStorage.setItem('todos', JSON.stringify(todos));
            saveTodos(todos)
                .then(() => {
                    console.log("Todos saved successfully");
                })
                .catch(error => {
                    console.error("Failed to save todos:", error);
                });
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