import React from "react";
import { useState } from "react";
import Todo2Item from "./Todo2Item";
import Todo2Input from "./Todo2Input";

const Todo2List = () => {
    const [list, setList] = useState ([]);
    const addItem = () => {
        setList([...list,input])
        };

    return (
        <div>
            <h3>To-do List</h3>
            {Todo2List.addItem}
        </div>
    );
};

export default Todo2List;