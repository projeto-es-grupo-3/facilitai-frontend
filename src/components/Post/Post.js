import { Roboto } from 'next/font/google';
import Image from 'next/image';
import styles from '@/components/Post/Post.module.css';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import capelo from '../../../public/images/capelo.png';
import livro from '../../../public/images/livro.png';
import predio from '../../../public/images//predio.png';
import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Post (parameters) {

    const {category, titlePost, description, advertiser, imgUser, imgPost, whatsapp, email, ...rest} = parameters;
    let post = {}

    if (category === "apartaments") {
        post = {
            "Preço: ": rest.price,
            "Endereço: ": rest.address,
            "Área(m²): ": rest.area,
            "Número de Quartos: ":rest.bedrooms
        }
    } else if (category === "books") {
        
    }

    const elements = Object.entries(post);

    return (
        <div className="row bg-custom1 rounded mt-4 text-custom3">
            <div className="col-12 col-md-4">
                <div className="row">
                    <Image className={`rounded-start ${styles.imgPost}`} alt="" src={imgPost}/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="row mt-2">
                    <h4>{titlePost}</h4>
                    <hr/>
                    <h6>Descrição:</h6>
                </div>
                <p className="text-wrap">{description}</p>
                <div className="d-flex">
                    <span className="fw-bold">Anunciante:</span>
                    <span className="ms-2">{advertiser}</span>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                            { elements.map( (index) => {
                            return (
                            <div className="d-flex">
                                <span className="fw-bold">{index[0]}</span>
                                <span className="ms-2">{index[1]}</span>
                            </div>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-4 d-flex align-items-end">
                        {
                        category === "apartaments" ? <Image className={`${styles.imgCategory}`} alt="" src={predio}/>
                        : category === "books" ? <Image className={`${styles.imgCategory}`} alt="" src={livro}/> 
                        : <Image className={`${styles.imgCategory}`} alt="" src={capelo}/>
                        }
                    </div>
                </div>
                
            </div>
            <div className="col-2 d-none d-md-block">
                <div className="row d-flex align-items-end">
                {
                    imgUser ? <Image className={`rounded ${styles.imgUser}`} alt="" src={imgUser}/>:
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