import React,{useState} from "react";

let globalId=0;

function App(){
    const [todos,setTodos]=useState([])
    const [task,setTask]=useState("")
    
    function todofun(e){
        e.preventDefault();
        setTodos(oldTodo=>{
            setTask(''); //displayed task set to '' then input type dikha raha
            return [...oldTodo,{todo:task,id:globalId++}]});
    }

    function EnterKeyFunction(e){
        if(e.KeyCode===13){
            todofun();
        }
    }

    function deleteFun(itemId){
        setTodos(oldTodo=>oldTodo.filter(item=>item.id!=itemId));
    }
    return (
        //Method-1 
        // <div>
        //     <h2>Best To Do App Ever</h2>
        //     <input onKeyDown={EnterKeyFunction}
        //     type="text" value={task} onChange={event=>{
        //         setTask(event.target.value)
        //         //settask change task to typed value
        //     }}></input>
        //     <button onClick={todofun}>Create Todo</button>
        //     <ul>
        //         {todos.map((todo,index) => 
        //          <li key={index}>{todo}</li>
        //         )}
        //     </ul>
        // </div>

        //Method-2 Form bana le 
        //button no need of on click khud form refresh ho jayega
        <div>
          <h2>Best To Do App Ever</h2>
          <form onSubmit={todofun}>
          <input type="text" value={task} onChange={event=>{
                setTask(event.target.value)
                //settask change task to typed value
            }}></input>
            <button type="submit">Create Todo</button>
          </form>  
          <ul>
           {todos.map((item,index) =>
                  <div key={item.id}> 
                    <li>{item.todo}({item.id})</li>
                    <button onClick={()=>deleteFun(item.id)}>Delete ME</button>
                 </div> 
                )}
            </ul>
           
        </div>
// 
    )
}

export default App;