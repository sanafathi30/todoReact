import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos,setTodos]=useState([]);
    

    //
     
    const addTodoHandler=(input,desctiption)=>{
        // 
        const k=Math.floor(Math.random()*1000);
        const newtodo = {
          id: k,
          text1: input,
          text2: desctiption,
          isCommplited: false,
        };
        
        
       setTodos([...todos,newtodo]);
   
    };
   
    
    return (
      <div className="container flex flex-col items-center  h-16">
        <TodoForm addTodoHandler={addTodoHandler} />
        <TodoList todos={todos} />
      </div>
    );
}

export default TodoApp;