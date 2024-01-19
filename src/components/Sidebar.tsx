import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=30&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/threis.png" />
                <strong>Thiago Reis</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#"> <PencilLine size={20} /> Editar seu perfil</a>
            </footer>
        </aside>
    )
}