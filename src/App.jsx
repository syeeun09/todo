//투두리스트 만들기
//1. 빈 값의 입력창
//2. 입력하고 등록하면 리스트에 그 값이 떠야함
//3. 그리고 입력창은 다시 초기화
//4. 삭제 및 수정 기능(버튼)
//5. 체크박스가 체크로 바뀌면 항목은 맨 아래로 내려간다
//6. 총 투두 목록의 개수와 완료 수 표시
//필요한 컴포넌트 -> 인풋, 리스트 목록, 투두아이템
import React from "react";
import Todo2Input from "../src/component/Todo2Input.jsx"
import Todo2List from "./component/Todo2List.jsx";
import Todo2Item from "./component/Todo2Item.jsx";


function App(){
    
    return (
        <div>
            <h1>to-do, you can do!</h1>
            <Todo2Input />
            <Todo2List 
                item = {additem}/>
        </div>
    );
};

export default App;