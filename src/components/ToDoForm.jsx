import React, {useState} from "react";

const ToDoForm = ({handleSubmit}) =>{
    //inisialisasi local state => memory dari sebuah komponen array[nama simpanan, fungsi]
    const [todo, setTodo] = useState("");
    
    const submitHandler = (todo) =>{
        handleSubmit(todo);
        setTodo("");
    }

    return (
        <div>
            
                <div> 
                    <input className="todo-input"
                        value={todo}
                        onChange={(e)=> setTodo(e.target.value)}
                        autoFocus 
                    />
                    <br />
                    {/* <p>{todo}</p> */}
                    {/*/ dATANYA AKAN DI PARSING KE KOMPONEN DIATASNYA DAN AKAN DIKIRIMKAN DENGAN PROPS */}
                    <button className="todo-submit" onClick={()=> submitHandler(todo)}>Submit</button>
                </div>
            
        </div>
    )
}

export default ToDoForm;