import UserNavbar from '@/components/UserNavbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AddToDo from '@/components/AddToDo'
import styles from '@/styles/ToDoS.module.css'
const index = () => {
    const router = useRouter()
    const [user, setUser] = useState({})
    useEffect(function () {
        fetch('http://localhost:5000', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(result => setUser(result))
            .catch(err => router.push('/sign/in'))
    }, [])
    return (
        <div>
            <UserNavbar firstName={user.firstName} lastName={user.lastName} />
            <div className={styles.toDoSComponent}>
                <AddToDo />
            </div>
        </div>
    )
}

export default index