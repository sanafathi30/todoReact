import { useState } from "react";

const TodoForm = (props) => {
    const [input,setInput]=useState("");
    const changeHandler =(e)=>{
        
        setInput(e.target.value);
    }
    const [description,setDecscriptin]=useState("");
    const decscriptinhandler=(e)=>{
        setDecscriptin(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        if(!input){
            console.log("enter to do!");
            return;
         
        }
          props.addTodoHandler(input, description);
          setInput('')  
          setDecscriptin("")   
        
        
    }
    return (
      <form
        className="container "
        onSubmit={submitHandler}
      >
        <div className="border-b-2 border-gray-300 pb-10">
            <p>Task</p>
        <div className="border-2 border-gray-300 rounded-xl mb-6 ">
          <input
            type="text"
            className=" w-full py-4 rounded-xl px-6 "
            placeholder=""
            value={input}
            onChange={changeHandler}
          />
        </div>

        <p>Description</p>
        <div className="border-2 border-gray-300 rounded-xl mb-6">
          <textarea
            name=""
            id=""
            className="w-full resize-none rounded-xl px-6 py-2 "
            cols="30"
            rows="5"
            value={description}
            onChange={decscriptinhandler}
          ></textarea>
        </div>
        <button
          className=" text-white bg-blue-600 ring-4 rounded-xl ring-blue-400 py-3  px-5"
          type="submit"
        >
          Add item
        </button>
        </div>
          <ul className="flex w-full  justify-between py-6 border-b-2 border-gray-300">
          <li className="font-semibold text-xl">S.no</li>
          <li className="font-semibold text-xl">Task</li>
          <li className="font-semibold text-xl">Description</li>
          <li> </li>
        </ul>  
      </form>
    );
}

export default TodoForm;