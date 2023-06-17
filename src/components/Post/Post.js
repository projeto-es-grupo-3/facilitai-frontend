import { Roboto } from 'next/font/google';
import Image from 'next/image';
import styles from '@/components/Post/Post.module.css';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import capelo from '../../../public/images/capelo.png';
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

        console.log(rest.price);
        
        post = {
            "Preço: ": rest.price,
            "Endereço: ": rest.address,
            "Área(m²): ": rest.area,
            "Número de Quartos: ":rest.bedrooms
        }
    }


    const elements = Object.entries(post);

    console.log(elements);
    return (
        <h1>POST</h1>
        // <div className="row bg-custom1 rounded mt-4 text-custom3">
        //     <div className="col-4">
        //         <div className="row">
        //             <Image className={`rounded-start ${styles.imgPost}`} alt="" src={imgPost}/>
        //         </div>
        //     </div>
        //     <div className="col-6">
        //         <div className="row">
        //             <h3>{titlePost}</h3>
        //             <h5>Descrição:</h5>
        //         </div>
        //         <p className="text-wrap">{description}</p>
        //         <h5>Anunciante:</h5>
        //         <span>{advertiser}</span>
        //         <div className="row">
        //             <div className="col-6">
        //                     { elements.map( (index) => {
        //                     return (
        //                     <div className="row">
        //                         <h5>{index[0]}</h5>
        //                         <span>{index[1]}</span>
        //                     </div>
        //                     )
        //                 })}
        //             </div>
        //             <div className="col-6 d-flex  align-items-end">
        //                 <Image className={`${styles.imgCategory}`} alt="" src={capelo}/>
        //             </div>

        //         </div>
                
        //     </div>
        //     <div className="col-2">
        //         <div className="row d-flex align-items-end">
        //         {
        //             imgUser ? <Image className={`rounded ${styles.imgUser}`} alt="" src={imgUser}/>:
        //             <i><FaUserCircle className={`${styles.imgUser} text-custom1`} /></i>
        //         }
        //         </div>

        //         <div className="row mt-5 ">
        //             <div className="col-6">
        //                 <a  href={`https://api.whatsapp.com/send/?phone=${whatsapp}`}><i><IoLogoWhatsapp className="text-custom3" size={40}/></i></a>
        //             </div>
        //             <div className="col-6">
        //                 <a href={`mailto:${email}`}><i><SiGmail className="text-custom3" size={40}/></i></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
} 