import React from "react";


const ToDoList = ({todos}) => {
    return(
        <div >
            <ul className="List-item">
                
                {
                    todos.map((item)=>{
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;