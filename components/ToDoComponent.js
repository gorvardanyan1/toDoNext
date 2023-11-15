import AddToDo from '@/components/AddToDo'
import styles from '@/styles/ToDoS.module.css'
import ToDoList from '@/components/ToDoList'
import { useEffect, useState } from 'react'
const ToDoComponent = () => {
    const [addToDo, setAddToDo] = useState(false)
    const [todo, setToDos] = useState([])
    useEffect(function () {
        fetch('http://localhost:5000/todos', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(result => setToDos(result))
    }, [addToDo])
    return (
        <>
            <div className={styles.toDoSComponent}>
                <AddToDo setAddToDo={setAddToDo} />
            </div>

            <ToDoList todos={todo} setToDos={setToDos} />
        </>
    )
}

export default ToDoComponent