import styles from '@/components/Form/Form.module.css'
import React from 'react';
import { MdOutlineVisibilityOff, MdOutlineAccountCircle, MdOutlineVisibility } from 'react-icons/md'
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Form({ChangeForm}) {

    const [user, setUser] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [hidePassword, setHidePassword] = React.useState(true)
    return (
        <form className={`bg-custom1 rounded-3 shadow d-flex flex-column justify-content-between align-items-center ${styles.form}`} action="">
            <h3 className={`mt-5 text-center ${roboto.className}`}>Faça o login na plataforma Facilitaí</h3>
            <div className={styles.inputField}>
                <input required onChange={e => setUser(e.target.value)} type="text" id="user" />
                <label className={roboto.className} htmlFor='user'>Usuário</label>
                <i><MdOutlineAccountCircle color='#fff' width={30} height={30}/></i>
            </div>
            <div className={styles.inputField}>
                <input required onChange={e => setPassword(e.target.value)} type={hidePassword? "password":"text"} id="password" />
                <label className={roboto.className} htmlFor='password'>Senha</label>
                <i onClick={e => setHidePassword(!hidePassword)}>
                    {
                        hidePassword ? <MdOutlineVisibilityOff color='#fff' width={30} height={30}/> : <MdOutlineVisibility color='#fff' width={30} height={30}/>
                    }
                </i>
            </div>
            <button className={`${styles.button} ${roboto.className}`}>Entrar</button>
            <a className={roboto.className} onClick={()=>ChangeForm()} >Aluno da ufcg e ainda não cadastrado? Clique aqui!</a>
        </form>
    )
}