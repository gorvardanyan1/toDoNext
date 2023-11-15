import React from 'react'
import styles from "@/styles/Sign.module.css"
import { useRouter } from 'next/router'
const In = () => {
    const router = useRouter()
    const handleSumbit = (e) => {
        e.preventDefault()
        const signInData = {
            userName: e.target.userName.value,
            password: e.target.password.value
        }
        fetch('https://to-do-api-mu.vercel.app/sign/in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            credentials: 'include',
            body: JSON.stringify(signInData),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                localStorage.setItem("accessId", result.id)
                router.push("/user")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className={styles.in}>
            <form method='POST' onSubmit={handleSumbit}>
                <fieldset>
                    <legend>Sign In</legend>
                    <div>
                        <input type='text' name='userName' placeholder='userName' />
                    </div>
                    <div>
                        <input type="password" name='password' placeholder='Password' />
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </fieldset>

            </form>
        </div>
    )
}

export default In