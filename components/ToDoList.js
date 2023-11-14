import { useEffect, useState } from "react";
import styles from "@/styles/ToDoS.module.css"
import { motion, AnimatePresence } from 'framer-motion';
const ToDoList = ({ todos }) => {
    console.log(todos);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleTodoClick = (todo) => {
        if (selectedTodo === todo) {
            // If the same todo is clicked again, close the dropdown
            setSelectedTodo(null);
        } else {
            // Otherwise, open the dropdown for the clicked todo
            setSelectedTodo(todo);
        }
    };

    return (
        <div className={styles.toDoListContainer}>
            <div>
                <h2>To-Do List</h2>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo._id} onClick={() => handleTodoClick(todo)}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedTodo === todo ? '#2b4c2e' : 'transparent',

                                padding: '8px',
                                marginBottom: '8px',
                                borderRadius: '4px',
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                            }}
                        >
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
                                        {/* Add any additional information you want to display */}
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
