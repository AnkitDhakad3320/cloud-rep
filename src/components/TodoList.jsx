
const TodoList = (props)=>{
    return (
        <li className="todoListItem">
        {props.completed ?<>✓</> : <input type="checkbox" className="checkbox"/>}
        <p>{props.text}</p>
        <button className="optionButton">...✗</button>
        </li>
    );
};
export default TodoList;