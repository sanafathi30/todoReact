const TodoList = ({todos}) => {
   
   

    const renderTodos=()=>{
      
        
       
        if(todos.length ===0) return <p className="text-center mt-6 text-3xl">Add some todos</p>
        return  todos.map((todo ,index)=>{
            return (
              <ul className="flex w-full  justify-between py-6 border-b-2 border-gray-300">
                <li className="font-semibold text-xl">{todo.id}</li>
                <li className="font-semibold text-xl">{todo.text1}</li>
                <li className="font-semibold text-xl">{todo.text2}</li>
                <li>
                  <button
                    onClick={()=>{todos.splice(index, 1)}}
                    className="text-white bg-blue-600 ring-4 rounded-xl ring-blue-400 py-3  px-5"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            );
            
             
        });
    
    };
    return (
      <div className="container ">{renderTodos()}</div>
    );
}

export default TodoList;