import Todo
 from "./items";
 import "./App.css"
function TaskList({todos, onChange, onDelete}) {
    

    return (
        <div>
            {
                todos.map((todo) => {
                    return <Todo key = {todo.id}
                                 todo = {todo}
                                 onChange={onChange}
                                 onDelete={onDelete}
                                 />
                })
            }
          
        </div>
       
    )
};

export default TaskList;