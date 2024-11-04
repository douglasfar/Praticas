import { useState } from "react"

export default function TodoList (){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task){
            setTasks([...tasks, task]);
            setTask(''); // Limpa o texto
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    
       return (
        <>
         <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => removeTask(index)}>
            {task}
          </li>
        ))}
      </ul>
    </div>   
        
           
        </>
    );
}