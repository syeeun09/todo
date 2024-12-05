import { useState } from "react";
import style from "../css/TodoInput.module.css";

const TodoInput = ({addTodo}) => {
    // 초기값은 '' : 빈 문자열
    const[input, setInput] = useState('');

    // handleAdd : 사용자가 특정 동작을 수행했을 때 호출되는 함수
    const handleAdd = () => {
        // 사용자가 공백이 아닌 유효한 내용을 입력했는지 확인, 공백만 포함된 경우 : 함수는 아무 작업도 하지 않음
        if (input.trim()) {
            //사용자가 입력한 input 값을 addTodo에 전달
            addTodo(input);
            //input 을 빈 문자열로 초기화 => 사용자가 할 일을 추가한 뒤 입력 필드를 비움
            setInput('');
        }
    };
    //handleKeyDown : 이벤트 핸들러 함수, 키보드 이벤트가 발생했을 때 실행되며,
    //e로 키보드 입력에 대한 정보를 담고 있음
    const handleKeyDown = (e) => {
        //사용자가 Enter을 눌렀는지 확인 후, 누른 경우 
        //=> handleAdd가 호출되며 입력된 할 일이 추가되고 입력 필드가 초기화
        if (e.key === 'Enter') handleAdd();
    };

    //return : 컴포넌트가 렌더링할 내용을 반환
    return (
        //style.container : CSS 모듈을 통해 전달된 클래스 이름
        <div className={style.container}>
            {/* 입력 필드 정의 */}
            <input
                type="text"
                //입력 필드는 input 상태 값과 항상 동기화
                value={input}
                //사용자가 입력 필드에 텍스트를 입력하면 호출
                //입력 값을 e.target.value로 가져와 input 상태를 업데이트
                onChange={(e) => setInput(e.target.value)}
                //사용자가 enter을 누르면 handleKeyDown이 호출되어 새로운 할 일을 추가
                onKeyDown={handleKeyDown}
                placeholder="오늘 해야할 일이 있을 텐데?"
                //CSS 모듈의 스타일 클래스 todoInput을 적용
                className={style.todoInput}
            />
            <button onClick={handleAdd}> 할 일 등록 </button>
        </div>
    );
};

export default TodoInput;