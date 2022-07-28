import './App.css';

function Todo({todo, onChange, onDelete}){
    return (
        <div className='item'>
            <input type="checkbox" checked={todo.completed} onChange={(e) => {
                onChange({
                    ...todo,
                    completed:e.target.checked
                })
            }}/>
            <label>{todo.title}</label>
            <button className="btn_x" onClick={() => {
                onDelete(todo)
            }}>x</button>
        </div>
    )
}



export default Todo;