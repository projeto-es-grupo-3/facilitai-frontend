import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import { Roboto } from 'next/font/google';
import styles from '@/components/Header/Header.module.css';
import UserTab from '../UserTab/UserTab';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function Header() {
    return (
        <header>
            <nav className="navbar m-0 p-0 mt-5">
                <div className="container-fluid m-0 p-0 d-flex justify-content-center">
                    <div className="row w-100">
                        <Image className="col-8 col-md-4 h-50" src={logo} alt="Logo" />
                        <div className="col-4 col-md-8 d-flex justify-content-center align-items-md-center align-items-lg-start">
                            <CustomNavBar />
                            <MobileNavBar />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

function CustomNavBar() {
    return (
        <>
            <div className={`row w-100 ${styles.customNavBar} d-none d-md-block mt-4`}>
                <ul className="d-flex justify-content-evenly h-auto">
                    <li className={`${styles.customNavItem}`}>
                        <Link className={`fw-semibold fs-4 text-uppercase text-custom1 ${roboto.className}`} href="/">home</Link>
                    </li>
                    <li className={`${styles.customNavItem}`}>
                        <Link className={`fw-semibold fs-4 text-uppercase text-custom1 ${roboto.className}`} href="/about">about us</Link>
                    </li>
                    <li className={`${styles.customNavItem}`}>
                        <Link className={`fw-semibold fs-4 text-uppercase text-custom1 ${roboto.className}`} href="/contact">contact us</Link>
                    </li>
                    <li className={`${styles.customNavItem}`}>
                       <UserTab/>
                    </li>
                </ul>
            </div>
        </>
    )
}

function MobileNavBar() {
    return (
        <>
            <button className="d-md-none align-self-center navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className={`nav-link active fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} aria-current="page" href="/">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} aria-current="page" href="/about">about us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} aria-current="page" href="/contact">contact us</Link>
                        </li>
                        <li className={`${styles.customNavItem}`}>
                            <UserTab/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}