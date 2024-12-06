import { useState } from "react"

const Todo2Input = () => {
    const[input, setInput] = useState ('');
    const[category, setCategory] = useState ('');
    const [list, setList] = useState ([])
    const addItem = () => {
        setList([...list,input])
    }
    
    return (
        <div>
        <input
        type="category"
        name="category"
        value={category}
        placeholder="카테고리를 작성하세요"
        onChange={(e) => setCategory(e.target.value)}
        />
        <input 
        type="text" 
        name="input"
        value={input}
        placeholder="할 일을 작성하세요"
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>등록</button>
        </div>
    );
};

export default Todo2Input;