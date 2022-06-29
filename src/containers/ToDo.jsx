import React, { useState } from "react";
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () =>{
    // const myTodo = ["Menyapu","Nyuci", "Belajar"];
    //biar merender maka panggil state biar di render ulang
    //buat state lagi
    const [myTodo, setTodos] = useState(["Menyapu","Nyuci", "Belajar"]);

    const handleSubmit = (todo) =>{
        // myTodo.push(todo);
        // alert(myTodo);
        setTodos(myTodo=>[...myTodo,todo]);
    }
    
    return(
        <div className="ToDo">
            <h2 className="todo-title">To-Do List</h2>
            <ToDoForm handleSubmit={handleSubmit}/>
            <ToDoList todos={myTodo}/>
            
        </div>
    )
}

export default ToDo;