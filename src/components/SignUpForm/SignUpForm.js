import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import styles from '@/components/SignUpForm/SignUpForm.module.css';
import { MdOutlineVisibilityOff, MdOutlineAccountCircle, MdOutlineVisibility, MdOutlineEmail, MdOutlineSchool, MdOutlineContactMail } from 'react-icons/md'
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function SignUpForm({ ChangeForm }) {

    const [matricula, setMatricula] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [curso, setCurso] = React.useState("")
    const [user, setUser] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [hidePassword, setHidePassword] = React.useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = React.useState(true)
    const [popup, setPopup] = React.useState(false)

    const SignUp = (e) => {
        e.preventDefault()
    }
    const VerifyPasswordEqual = () => {

        if (password != confirmPassword) {
            setPopup(true)
        } else {
            setPopup(false)
        }
    }

    return (
        <form onSubmit={e => SignUp(e)} className={`bg-custom1 rounded-3 shadow d-flex flex-column justify-content-between align-items-center ${styles.form}`} action="">
            <h3 className={`mt-5 text-center ${roboto.className}`}>Cadastre-se na plataforma Facilitaí</h3>
            <div className="d-flex">
                <div className={`${styles.inputField} me-2`}>
                    <input required onChange={e => setMatricula(e.target.value)} type="text" id="matricula" />
                    <label className={roboto.className} htmlFor='matricula'>Matrícula</label>
                    <i><MdOutlineContactMail color='#fff' width={30} height={30} /></i>
                </div>
                <div className={`${styles.inputField} ms-2`}>
                    <input required onChange={e => setCurso(e.target.value)} type="text" id="curso" />
                    <label className={roboto.className} htmlFor='curso'>Curso</label>
                    <i><MdOutlineSchool color='#fff' width={30} height={30} /></i>
                </div>
            </div>
            <div className="d-flex">
                <div className={`${styles.inputField} me-2`}>
                    <input required onChange={e => setEmail(e.target.value)} type="email" id="email" />
                    <label className={roboto.className} htmlFor='email'>E-mail</label>
                    <i><MdOutlineEmail color='#fff' width={30} height={30} /></i>
                </div>
                <div className={`${styles.inputField} ms-2`}>
                    <input required onChange={e => setUser(e.target.value)} type="text" id="user" />
                    <label className={roboto.className} htmlFor='user'>Usuário</label>
                    <i><MdOutlineAccountCircle color='#fff' width={30} height={30} /></i>
                </div>
            </div>
            <div className={styles.inputField}>
                <input required onChange={e => setPassword(e.target.value)} type={hidePassword ? "password" : "text"} id="password" />
                <label className={roboto.className} htmlFor='password'>Senha</label>
                <i onClick={e => setHidePassword(!hidePassword)}>
                    {
                        hidePassword ? <MdOutlineVisibilityOff color='#fff' width={30} height={30} /> : <MdOutlineVisibility color='#fff' width={30} height={30} />
                    }
                </i>
            </div>
            <div className={styles.inputField}>
                <input required onChange={e => setConfirmPassword(e.target.value)} type={hideConfirmPassword ? "password" : "text"} id="confirmpassword" />
                <label className={roboto.className} htmlFor='confirmpassword'>Confirme a senha</label>
                <i onClick={e => setHideConfirmPassword(!hideConfirmPassword)}>
                    {
                        hideConfirmPassword ? <MdOutlineVisibilityOff color='#fff' width={30} height={30} /> : <MdOutlineVisibility color='#fff' width={30} height={30} />
                    }
                </i>
            </div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popup
                ?
                <Popover id="popover-positioned-bottom">
                    <Popover.Body>
                        As senhas devem ser iguais!
                    </Popover.Body>
                </Popover>
                : <></>}>
                <Button className={`${styles.button} ${roboto.className}`} onClick={() => VerifyPasswordEqual()}>Cadastrar</Button>
            </OverlayTrigger>
            <a className={roboto.className} onClick={() => ChangeForm()} >Já tem o cadastro na plataforma? Clique aqui!</a>
        </form>
    )
}