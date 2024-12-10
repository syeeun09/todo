import TodoItem from "./TodoItem";
import style from "../css/TodoList.module.css";

// 구조분해 할당으로 부모 컴포넌트로부터 전달받은 props를 구조분해하여 todos, updateTodo 등의 값을 사용
const TodoList = ({todo, updateTodo, toggleComplete, deleteTodo}) => {
    return (
        <ul className={style.ul}>
            {/* 각 todo는 하나의 TodoItem으로 랜더링 됨 
            배열의 각 항목을 순회하면서 컴포넌트를 동적으로 생성 */}
            {todo.map((todo) => (
                //TodoList 는 TodoItem에 필요한 데이터를 전달
                <TodoItem
                    //props 전달
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;