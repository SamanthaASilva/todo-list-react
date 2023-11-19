import './TodoItem.css';

const TodoItem = ({ tarefa }) => {
    return (
        <li className='todo-item'>
        <input type='checkbox'/>
        { tarefa }
    </li>
    )
}

export default TodoItem;