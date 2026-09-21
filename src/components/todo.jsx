import TodoList from "./TodoList";
import Button from "./Button";


const Todo = (props)=>{
    return (
        <div className="todoBlock">
        <h3 className="listHeader">{props.todo}</h3>
        <TodoList text="Eat"/>
        <TodoList completed="true" text="Study"/>
        <TodoList text="Run"/>
        <TodoList text="Shop"/>
        <Button/>
        </div>
    )
}
export default Todo;