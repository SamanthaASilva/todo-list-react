import { useState }from 'react';
import './TodoForm.css';

const TodoForm = ({ onAdd }) => {
    const [tarefaText, setTarefaText] = useState('');

    const handleChange = (event) => {
        setTarefaText(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!tarefaText) {
            alert('Preencha o campo');
            return;
        }
        onAdd(tarefaText);
        setTarefaText('');
    }

    return ( 
    <form className="todo-register" onSubmit={handleSubmit}>
        <label htmlFor="tarefa">Tarefa</label>
        <input id="tarefa" type="text" placeholder="Digite uma tarefa" value={tarefaText} onChange={handleChange}/>
        <button type="submit">Enviar</button>
    </form>
    )
} 

export default TodoForm;