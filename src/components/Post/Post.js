import { Roboto } from 'next/font/google';
import Image from 'next/image';
import styles from '@/components/Post/Post.module.css';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import capelo from '../../../public/images/capelo.png';
import livro from '../../../public/images/livro.png';
import predio from '../../../public/images/predio.png';
import galeria from '../../../public/images/galeria.png';
import perfil from '../../../public/images/perfil.png';

import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Post ({category, data}) {

    const {titulo, descricao, anunciante, imgUser, imgPost, whatsapp, email, ...rest} = data;
    let post = {}

    if (category === "search-apartments") {
        post = {
            "Preço: ": rest.preco,
            "Endereço: ": rest.endereco,
            "Área(m²): ": rest.area,
            "Número de Quartos: ":rest.comodos
        }
    } else if (category === "search-books") {
        post = {
            "Preço: ": rest.preco,
            "Titulo Livro: ": rest.titulo_livro,
            "Autor: ": rest.autor,
            "Genêro: ": rest.genero,
            "Aceita trocas ":rest.aceita_trocas
        }
    }

    const elements = Object.entries(post);

    return (
        <div className={`row bg-custom1 rounded mt-4 text-custom3 ${styles.postCard}`}>
            <div className="col-12 col-md-4">
                <div className="row">
                    <Image className={`rounded-start ${styles.imgPost}`} alt="" src={galeria}/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="row mt-2">
                    <h4>{titulo}</h4>
                    <hr/>
                    <h6>Descrição:</h6>
                </div>
                <p className="text-wrap">{descricao}</p>
                <div className="d-flex">
                    <span className="fw-bold">Anunciante:</span>
                    <span className="ms-2">{anunciante}</span>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                            { elements.map( (index) => {
                            return (
                                <div className="d-flex" key={index}>
                                    <span className="fw-bold">{index[0]}</span>
                                    <span className="ms-2">{index[1]}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-4 d-flex align-items-end">
                        {
                        category == "search-apartments" ? <Image className={`${styles.imgCategory}`} alt="" src={predio}/>
                        : category == "search-books" ? <Image className={`${styles.imgCategory}`} alt="" src={livro}/> 
                        : <Image className={`${styles.imgCategory}`} alt="" src={capelo}/>
                        }
                    </div>
                </div>
            </div>
            <div className="col-2 d-none d-md-block">
                <div className="row d-flex align-items-end">
                {
                    imgUser ? <Image className={`rounded ${styles.imgUser}`} alt="" src={perfil}/>:
                    <i><FaUserCircle className={`mt-2 ${styles.imgUser} text-custom3`} /></i>
                }
                </div>
                <div className="row mt-5 ">
                    <div className="col-6">
                        <a  href={`https://api.whatsapp.com/send/?phone=${whatsapp}`}><i><IoLogoWhatsapp className="text-custom3" size={40}/></i></a>
                    </div>
                    <div className="col-6">
                        <a href={`mailto:${email}`}><i><SiGmail className="text-custom3" size={40}/></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
} 