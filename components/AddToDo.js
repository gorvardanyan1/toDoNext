import React from 'react'
import styles from "@/styles/ToDoS.module.css"
const AddToDo = () => {
    const handleSubmit = (e) => {
        const toDoData = {
            title: e.target.title.value,
            description: e.target.description.value
        }
        fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(toDoData),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className={styles.addToDo}>
            <form method='post' onSubmit={handleSubmit}>
                <div>
                    <input type='text' name='title' placeholder='To Do Title' />
                </div>
                <div>
                    <textarea name='description' placeholder='Description' cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add To Do</button>
                </div>
            </form>
        </div>
    )
}

export default AddToDo