import TodoList from "./TodoList";
import Button from "./Button";


const Todo = ()=>{
    return (
        <div className="todoBlock">
        <h3 className="listHeader">Todo</h3>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <Button/>
        </div>
    )
}
export default Todo;