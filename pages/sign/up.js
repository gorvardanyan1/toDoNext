import React from 'react'
import styles from '@/styles/Sign.module.css'
import { useRouter } from 'next/router'
const Up = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        const signUpData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            userName: e.target.userName.value,
            password: e.target.password.value,
            gender: e.target.gender.value,
            born: e.target.born.value,
        }
        console.log(signUpData);

        fetch('https://to-do-api-mu.vercel.app/sign/up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signUpData),
        })
            .then(response => router.push('/sign/in'))
            .catch(err => console.error(err))
    }
    return (
        <div className={styles.up}>
            <form method='POST' onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign UP</legend>
                    <div>
                        <input type="text" name='firstName' placeholder='first Name' minLength='1' maxLength='35' />
                    </div>
                    <div>
                        <input type="text" name='lastName' placeholder='Last Name' minLength='1' maxLength='40' />
                    </div>
                    <div>
                        <input type="text" name='userName' placeholder='User Name' minLength='3' maxLength='40' />
                    </div>
                    <div>
                        <input type="password" name='password' placeholder='password' minLength='8' maxLength='40' />
                    </div>
                    <div>
                        <input type="radio" name='gender' id='male' value='male' />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input type="date" name='born' />
                    </div>
                    <div>
                        {/* <input type="submit" /> */}
                        <button>Submit</button>
                    </div>
                </fieldset>

            </form>

        </div>
    )
}

export default Up