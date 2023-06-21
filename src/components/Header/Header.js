import styles from '@/components/Header/Header.module.css';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

// @react-bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function Header({ children, logged }) {
    return (
        <header>
            <nav className="navbar m-0 p-0 mt-5">
                <div className="container-fluid m-0 p-0 d-flex justify-content-center">
                    <div className="row w-100">
                        <Image className="col-9 col-md-3 h-50" src={logo} alt="Logo" />
                        <div className="col-3 col-md-9 d-flex justify-content-center align-items-md-center align-items-lg-start">
                            <CustomNavBar logged={logged}>
                                {
                                    children
                                }
                            </CustomNavBar>
                            <OffcanvasExample logged={logged}>
                                {
                                    children
                                }
                            </OffcanvasExample>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

function CustomNavBar({ children, logged }) {
    return (
        <>
            <div className={`row w-100 ${styles.customNavBar} d-none d-md-block mt-4`}>
                <ul className="d-flex justify-content-evenly h-auto">
                    <li className={`${styles.customNavItem}`}>
                        <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/">home</Link>
                    </li>
                    <li className={`${styles.customNavItem}`}>
                        <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/about">sobre nós</Link>
                    </li>
                    <li className={`${styles.customNavItem}`}>
                        <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/contact">contate-nos</Link>
                    </li>
                    {
                        logged ?
                            <>
                                <li className={`${styles.customNavItem}`}>
                                    <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/dashboard">dashboard</Link>
                                </li>
                                <li className={`${styles.customNavItem}`}>
                                    <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/posts">posts</Link>
                                </li>
                            </>
                            : <></>
                    }
                    {
                        logged ? children

                            :
                            <li className={`${styles.customNavItem}`}>
                                <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/login">login</Link>
                            </li>
                    }
                </ul>
            </div>
        </>
    )
}


function OffcanvasExample({ children, logged }) {
    return (
        <>
            <Navbar key={"md"} expand={"md"} className="mb-3 d-md-none">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${"md"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className={`nav-link active fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} aria-current="page" href="/">home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link active fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} aria-current="page" href="/about">sobre nós</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link active fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} aria-current="page" href="/contact">contate-nos</Link>
                                </li>
                                {
                                    logged ?
                                        <>
                                            <li className={`${styles.customNavItem}`}>
                                                <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/dashboard">dashboard</Link>
                                            </li>
                                            <li className={`${styles.customNavItem}`}>
                                                <Link className={`fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} href="/posts">posts</Link>
                                            </li>
                                        </>

                                        : <></>
                                }
                                {

                                    logged ? <><hr /> {children}</>

                                        :
                                        <li className="nav-item">
                                            <Link className={`nav-link active fw-semibold fs-5 text-uppercase text-custom1 ${roboto.className}`} aria-current="page" href="/login">login</Link>
                                        </li>
                                }

                            </ul>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}