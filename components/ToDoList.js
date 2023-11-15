import { useEffect, useState } from "react";
import styles from "@/styles/ToDoS.module.css"
import { motion, AnimatePresence } from 'framer-motion';
const ToDoList = ({ todos, setToDos }) => {

    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleTodoClick = (todo) => {
        if (selectedTodo === todo) {
            setSelectedTodo(null);
        } else {
            setSelectedTodo(todo);
        }
    };
    const handleRemoveToDo = (id) => {
        fetch(`https://to-do-api-mu.vercel.app/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then(result => {
                fetch('https://to-do-api-mu.vercel.app/todos', {
                    credentials: 'include'
                })
                    .then(res => res.json())
                    .then(result => setToDos(result))
            })
            .catch(err => console.log(err))

    }

    return (
        <div className={styles.toDoListContainer}>
            <div>
                <h2>To-Do List</h2>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo._id} onClick={() => handleTodoClick(todo)}
                            style={{
                                backgroundColor: selectedTodo === todo ? '#2b4c2e' : 'transparent',
                            }}
                        >
                            <input type="checkbox" name="isCompleted" id="isCompleted" />
                            {todo.title}

                            <AnimatePresence>
                                {selectedTodo === todo && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        style={{
                                            marginTop: '8px',
                                            paddingLeft: '10px',
                                            borderLeft: '2px solid #457b9d',
                                            color: '#ffffff', // Text color in the dropdown
                                        }}
                                    >
                                        <p>Description: {todo.description}</p>
                                        <img src='cross.png' width={29} height={29} onClick={() => handleRemoveToDo(todo._id)} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default ToDoList;
