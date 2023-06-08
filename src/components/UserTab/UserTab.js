import styles from '@/components/UserTab/UserTab.module.css';
import { useState } from 'react';
import { Roboto } from 'next/font/google';
import { FaUserCircle } from 'react-icons/fa';
import { BiLogOut, BiBell } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';


import Image from 'next/image';
import Link from 'next/link';


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function UserTab({ name, image, HandleLogOut }) {

    const [profile, setProfile] = useState(false);

    return (
        <>
            <div className="row">
                <div className="col-6 col-md-12 d-flex justify-content-center align-items-center" onClick={() => setProfile(!profile)}>
                    {
                        image ?
                            <Image className={styles.profile} src={image} alt="user" />
                            :
                            <i><FaUserCircle className={`${styles.profile} text-custom1`} /></i>
                    }
                </div>
                <div className="col-6 col-md-12 d-flex justify-content-center align-items-center">
                    <span className={`fs-5 text-custom1 ${roboto.className}`}>Bem vindo {name}</span>
                </div>
                <div className="col-12 d-none d-md-block d-flex justify-content-center align-items-center">
                    {profile ? <MenuProfile HandleLogOut={HandleLogOut} /> : <></>}
                </div>
                <div className="col-12 d-md-none">
                    <MenuProfileMobile HandleLogOut={HandleLogOut}/>
                </div>
            </div>
        </>
    )
}

function MenuProfileMobile({HandleLogOut}) {

    return (
        <div id={styles.menuMobile} className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                <Link className={`fs-5 text-custom1 ${roboto.className}`} href="/config">
                    Configurações
                    <i><BsGear className={`text-custom1`} /></i>
                </Link>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                <Link className={`fs-5 text-custom1 ${roboto.className}`} href="/notifications">
                    Notificações
                    <i><BiBell className={`text-custom1`} /></i>
                </Link>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center mt-3" >
                <Link className={`fs-5 text-custom1 ${roboto.className}`} href="" onClick={()=>HandleLogOut()}>
                    Log out
                    <i><BiLogOut className={` text-custom1`} /></i>
                </Link>
            </div>
        </div>
    )

}

function MenuProfile({HandleLogOut}) {
    return (
        <div className={`bg-primary ${styles.dropdown}`}>
            <div className={`${styles.dropdownContent} d-flex flex-column`}>
                <Link className={`fs-5 text-custom1 ${roboto.className}`} href="/config">
                    Configurações
                    <i><BsGear className={`text-custom1`} /></i>
                </Link>
                <Link className={`fs-5 text-custom1 ${roboto.className}`} href="/notifications">
                    Notificações
                    <i><BiBell className={`text-custom1`} /></i>
                </Link>
                <Link className={`fs-5 text-custom1 ${roboto.className}`} href="" onClick={()=>HandleLogOut()}>
                    Log out
                    <i><BiLogOut className={` text-custom1`} /></i>
                </Link>
            </div>
        </div>
    )
}