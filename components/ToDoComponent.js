import AddToDo from '@/components/AddToDo'
import styles from '@/styles/ToDoS.module.css'
import ToDoList from '@/components/ToDoList'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const ToDoComponent = () => {
    const router = useRouter()
    const [addToDo, setAddToDo] = useState(false)
    const [todo, setToDos] = useState([])
    useEffect(function () {
        fetch('https://to-do-api-mu.vercel.app/todos', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(result => setToDos(result))
            .catch(err => router.push('/sign/in'))
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