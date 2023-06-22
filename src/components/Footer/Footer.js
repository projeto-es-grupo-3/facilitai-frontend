import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Roboto } from 'next/font/google';
import styles from '@/components/Footer/Footer.module.css';


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function Footer() {
    return(
        <footer>
            <div className="container-fluid">
                <div className="row bg-custom3">
                    <div className="col-12 col-md-6 mt-3">
                        <h2 className={`text-custom1 fw-bold text-start ${roboto.className}`}>
                            Facilitaí Eng. de Software LTDA.
                        </h2>
                        <p className={`text-custom1 text-start mt-4 ${roboto.className}`}>
                            Facilitando a vida acadêmica dos alunos da UFCG: conexões eficientes para venda de livros, empréstimos, aluguel de apartamentos e 
                            colaboração mútua. Simplifique, conecte-se e aproveite ao máximo sua jornada universitária com o Facilitaí.
                        </p>
                    </div>
                    <div className="col-12 col-md-6  mt-3 d-flex flex-column">
                        <h2 className={`text-custom1 fw-bold text-center ${roboto.className}`}>
                                Redes Sociais
                        </h2>
                        <div className="d-flex justify-content-evenly mt-4 mb-3">
                            <a href=""><i><BsFacebook color='#000' size={40}/></i></a>
                            <a href=""><i><IoLogoWhatsapp color='#000' size={40}/></i></a>
                            <a href=""><i><SiGmail color='#000' size={40}/></i></a>
                            <a href=""><i><AiFillInstagram color='#000' size={40}/></i></a>
                        </div>
                    </div>
                </div>
                <div className={`row d-flex justify-content-center fw-bold bg-custom2 ${styles.bottomText}`}>
                    © 2023 Copyright Faicilitaí Eng. de Software
                </div>
            </div>
        </footer>
    )
}