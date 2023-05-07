import styles from '@/components/Form/Form.module.css'
import Link from 'next/link'
import React from 'react'
import { BiUserCircle, BiShow } from 'react-icons/bi'

export default function Form(props) {

    const [user, setUser] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <form className={styles.form} action="">
            <h3>Faça o login na plataforma Facilitaí</h3>
            <div className={styles.inputField}>
                <input onChange={e => setUser(e.target.value)} type="text" id="user" />
                <label htmlFor='user'>Usuário</label>
                <BiUserCircle color='#fff' width={'30px'} height={'30px'}/>
            </div>
            <div className={styles.inputField}>
                <input onChange={e => setPassword(e.target.value)} type="text" id="password" />
                <label htmlFor='password'>Senha</label>
                <BiShow color='#fff' width={'30px'} height={'30px'}/>
            </div>
            <button className={styles.button}>Entrar</button>
            <Link href="">Aluno da ufcg e ainda não cadastrado? Clique aqui!</Link>
        </form>
    )
}