import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Popover, Spinner } from 'react-bootstrap';
import styles from '@/components/SignUpForm/SignUpForm.module.css';
import { MdOutlineVisibilityOff, MdOutlineAccountCircle, MdOutlineVisibility, MdOutlineEmail, MdOutlineSchool, MdOutlineContactMail } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
import Router from 'next/router';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function SignUpForm({ SubmitSignUp, ChangeForm }) {

    const [matriculation, setmatriculation] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [course, setCourse] = React.useState("")
    const [user, setUser] = React.useState("")
    const [campus, setCampus] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [hidePassword, setHidePassword] = React.useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = React.useState(true)
    const [popup, setPopup] = React.useState(false)
    const [submitComplete, setSubmitComplete] = React.useState(0)
    const [spinner, setSpinner] = React.useState(false)


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const SignUp = async (e) => {
        e.preventDefault()
        if (!verifyPasswordEqual()) {
            setSpinner(true)
            await sleep(3000)
            const response = await SubmitSignUp(user, email, matriculation, campus, password, course)
            if ( response === 201) {
                setSubmitComplete(1)
            } else if (response === 409) {
                setSubmitComplete(2)
            }
            await sleep(3000)
            Router.reload("/login")
        }
    }
    const verifyPasswordEqual = () => {

        if (password != confirmPassword) {
            setPopup(true)
            return true
        } else {
            setPopup(false)
            return false
        }
    }

    return (
        <form className={`bg-custom1 rounded-3 shadow d-flex flex-column justify-content-between align-items-center ${styles.form}`} action="">
            <h3 className={`mt-5 text-center ${roboto.className}`}>Cadastre-se na plataforma Facilitaí</h3>
            <div className="d-flex">
                <div className={`${styles.inputField} me-2`}>
                    <input required onChange={e => setmatriculation(e.target.value)} type="text" id="matricula" />
                    <label className={roboto.className} htmlFor='matricula'>Matrícula</label>
                    <i><MdOutlineContactMail color='#fff' width={30} height={30} /></i>
                </div>
                <div className={`${styles.inputField} ms-2`}>
                    <input required onChange={e => setCourse(e.target.value)} type="text" id="curso" />
                    <label className={roboto.className} htmlFor='curso'>Curso</label>
                    <i><MdOutlineSchool color='#fff' width={30} height={30} /></i>
                </div>
            </div>
            <div className="d-flex">
                <div className={`${styles.inputField} me-2`}>
                    <input required onChange={e => setEmail(e.target.value)} type="text" id="email" />
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
                <input required onChange={e => setCampus(e.target.value)} type="text" id="campus" />
                <label className={roboto.className} htmlFor='campus'>Campus</label>
                <i><FaUniversity color='#fff' width={30} height={30} /></i>
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
                {
                    
                    submitComplete != 0 ? 
                        submitComplete === 1?
                            <div className={`bg-success text-center ${styles.formcheck}`}>Cadastro concluído com sucesso!</div>
                        :
                            <div className={`bg-danger text-center ${styles.formcheck}`}>Usuário já cadastrado!</div>

                        : spinner ?
                            <Spinner animation="grow" variant="primary" />
                            :
                            <Button className={`${styles.button} ${roboto.className}`} onClick={e => SignUp(e)}>
                                Cadastrar
                            </Button>
                }
            </OverlayTrigger>
            <a className={roboto.className} onClick={() => ChangeForm()} >Já tem o cadastro na plataforma? Clique aqui!</a>
        </form>
    )
}