import React from 'react'
import styles from "@/styles/NavbarUser.module.css"
const UserNavbar = ({ firstName, lastName }) => {
    return (
        <nav className={styles.userNavbar}>
            <div className={styles.userLogo}>{firstName && firstName[0]}</div>
            <div className={styles.userDate}>{firstName} {lastName}</div>
        </nav>
    )
}

export default UserNavbar