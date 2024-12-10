import { useState } from "react"

const Todo2Input = () => {
    const[input, setInput] = useState ({todo: '', category: ''});
    // (const[input, setInput] = useState('');
    // const[category, setCategory] = useState('');) 와 동일
    
    // const {todo, category} = input;
    //(const todo = input.todo;
    //const category = input.category; 와 동일) 
    //이걸 쓰면 inpu.todo 가 아닌 todo 로만 사용가능

    const onChangeinput = (e) => {
        setInput({...input, todo: e.target.value});
    };
    const onChangecategory = (e) => {
        setInput({...input, category : e.target.value});
    };

    const onChangetodo = (e) => {
        console.log("투두 : ", input.category, input.todo)
    };

    return (
        <div>
        <input
        type="text"
        name="category"
        value={input.category}
        placeholder="카테고리를 작성하세요"
        onChange={onChangecategory}   
        />

        <input 
        type="text" 
        name="input"
        value={input.todo}
        placeholder="할 일을 작성하세요"
        onChange={onChangeinput}
        />

        <button onClick={onChangetodo}>등록</button>
        </div>
    );
};

export default Todo2Input;