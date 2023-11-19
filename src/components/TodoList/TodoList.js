import { useState }from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = () => {
    const [tarefas, setTarefas] = useState([]);
  
    const AddTodo = (tarefaTextChildren) => {
        setTarefas([...tarefas, tarefaTextChildren]);
    }

    return (
        <section className="todolist">
            <h2 className='todo-title'>Minha Lista de Tarefas</h2>
           <TodoForm onAdd={AddTodo}/>
            <ol className='todos'>
                {tarefas.map((tarefa, index) => (
                    <TodoItem tarefa={tarefa} key={index}/>
                ))}
            </ol>
        </section>
    )
}

export default TodoList;