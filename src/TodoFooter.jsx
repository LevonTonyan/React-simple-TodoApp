function TodoFooter ({todos,checkMark}){

    let completed = todos.filter((el) => el.completed).length;
    let todosCount = todos.length;


    return (
        <div className="footer">
            <span>{`${completed}/${todosCount} completed`}</span>
            <button onClick={checkMark}>Clear completed</button>
         
        </div>
    )
}




export default TodoFooter;