import {useState} from 'react';



function TodoForm ({onAdd}) {
 
    let [text, setText] = useState("");
    

    return (
        <div className='adding_block'>
                <form onSubmit={(e) => {
           e.preventDefault();
            onAdd(text);
            setText("")
        }}>
            <input type="text" placeholder='Input the task' value={text} onChange={(e) => {
                setText(e.target.value)
                
            }}/>
            <button>Add</button>
        </form>

        </div>
        
    );

}



export default TodoForm;
