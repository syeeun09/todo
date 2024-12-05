import { useState } from "react";

const TodoItem = ({todo, updateTodo, toggleComplete, deleteTodo}) => {
    //isEditing : 현재 할 일이 편집 중인지의 여부를 나타내는 상태 값, 초기값 = false : 편집 모드가 아닌 상태
    //setIsEditing : isEditing을 업데이트하는 함수
    const [isEditing, setIsEditing] = useState(false);
    //editText : 편집 중인 텍스트를 저장하는 상태 값, 초기값 = todo.text : 현재 할 일의 텍스트를 가져옴
    //setEditText : editText 상태 값을 업데이트하는 함수, 사용자가 입력 필드에 텍스트를 수정하면 setEditText를 호출하여 수정된 텍스트를 저장
    const [editText, setEditText] = useState(todo.text);

    //handleEdit : 편집 버튼 클릭 시 호출되는 함수
    //isEditing , editText를 기반으로 동작
    const handleEdit = () => {
        //isEditing :현재 편집 모드인지 확인하고 true일 경우 수정 작업 진행
        //editText.trim() : 입력된 텍스트가 공백이 아닌 유효한 값인지 확인 후 텍스트 앞뒤의 공백을 제거
        //&& : and 조건 => 현재 isEditing 이고 editText인 경우에만 수정 작업 진행
        if(isEditing && editText.trim()) { 
            //부모 컴포넌트로 전달받은 함수, 할 일을 수정하는 기능 수행
            updateTodo(todo.id, editText);
        }
        //현재 편집 모드인 경우 : false로 변경하여 편집 모드 종료
        //현재 편집 모드가 아닌 경우 : true로 변경하여 편집 모드로 진입
        setIsEditing(!isEditing);
    };

    return (
        <li>
            <input
                type="checkbox"
                //todo.completed 상태에 따라 체크박스가 선택되거나 선택되지않음
                checked={todo.completed}
                //체크박스 상태가 변경되면 toggleComplete 함수를 호출하여 완료 상태를 토글
                //todo.id를 전달해 특정 할 일의 상태를 업데이트
                onChange={() => toggleComplete(todo.id)}
            />
{/* 편집 여부에 따른 렌더링 */}
            {/* 삼항연산자 => isEditing ? ... : ... */}
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                //span :인라인 요소
                //편집되지 않는 일반 텍스트를 표시
                <span
                    // 할 일이 완료되면 텍스트에 취소선 적용, 완료되지 않으면 기본 스타일 유지
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                >
                    {/* 할 일의 텍스트를 표시 */}
                    {todo.text}
                </span>
            )}

{/*편집 버튼 */}
            {/* 클릭시 handleEdit 함수 호출 */}
            <button onClick={handleEdit}>
                {/* 편집 모드일 경우 : '등록' 표시 */}
                {/* 일반 모드일 경우 : '수정' 표시 */}
                {isEditing ? '등록' : '수정'}
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
                삭제
            </button>
        </li>
    );
};

export default TodoItem;