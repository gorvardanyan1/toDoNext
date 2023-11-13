import React, { useEffect, useState } from 'react'

const index = () => {
    const [user, setUser] = useState({})
    useEffect(function () {
        fetch('http://localhost:5000', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(result => setUser(result))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>{user.firstName} {user.lastName}</div>
    )
}

export default index