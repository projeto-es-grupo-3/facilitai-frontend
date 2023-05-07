import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/Header/Header.module.css'

import logo from '../../../public/images/logo.png';

export default function Header() {
    return (
        <header className={styles.header}>
                <Image
                    className={styles.logo}
                    src={logo}
                    alt="Logo"
                />
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <Link href="/home">HOME</Link>
                        </li>
                        <li>
                            <Link href="/about">ABOUT US</Link>
                        </li>
                        <li>
                            <Link href="/login">LOGIN</Link>
                        </li>
                        <li>
                            <Link href="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}
