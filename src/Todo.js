import './Todo.css';

function Todo({task, onRemove}){


    return(

       <div className="todo">
        <p className="todo-item">{task}</p>
        <button className="remove" onClick={onRemove}>Remove</button>
       </div>

    );
}

export default Todo;
