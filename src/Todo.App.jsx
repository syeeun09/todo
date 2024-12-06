import { useState, useEffect } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/Todolist";
import styles from "../src/css/Todo.module.css";

function App() {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    // C : 생성하기 (CRUD : Creat , Read, Update, Delete) - todo 등록
    //@param {*} : 매개변수 이름, 매개변수에 대한 설명 - text todo의 내용
    const addTodo = (text) => {
        setTodos([...todos, {
                id: Date.now(),
                text,
                completed: false
        }]);
    };


    //U : 업데이트 - 변경된 텍스트 반영
    //id todo 의 고유 값 / updatedText 업데이트 반영 할 텍스트

    const updateTodo = (id, updatedText) => {
        setTodos(todos.map((todo) => (todo.id === id ? {...todo, text: updatedText} : todo)));
    };

    //U - 완료여부를 토글하는 핸들러 함수
    //id todo의 고유 값

    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => (todo.id == id ? {...todo, completed: !todo.completed} : todo)));
    };

    //D : 삭제
    // id todo의 고유 값
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className={styles.app}>
            <h1> To-do you can do! List <br />React To-do List</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList
            todos={todos}
            updateTodo={updateTodo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default App;
