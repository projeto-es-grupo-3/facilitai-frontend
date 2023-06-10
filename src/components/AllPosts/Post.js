import { Roboto } from 'next/font/google';
import Image from 'next/image';
import styles from '@/components/AllPosts/AllPosts.module.css';
import React from 'react';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Post ({
    titlePost = '',
    description = '',
    advertiser = '',
    price = '',
    address = '',
    area = '',
    bedrooms = '',
    titleBook = '',
    category = '',
    author = '',
    genre = '',
    postCategory = '',
    imgUser = '',
    imgPost = '',
    whatsapp = '',
    email = '',
    }) {

    const fields = [
        { label: 'Anunciante:', value: advertiser },
        { label: 'Preço:', value: price },
        { label: 'Endereço:', value: address },
        { label: 'Anunciante:', value: advertiser },
        { label: 'Área:', value: area },
        { label: 'Número de quartos:', value: bedrooms },
        { label: 'Título do livro:', value: titleBook },
        { label: 'Categoria:', value: category },
        { label: 'Autor:', value: author },
        { label: 'Gênero:', value: genre }
    ];

    return(
        <div className={`${styles.allContent} container ml-auto`}>
            <Image className={`${styles.imgPost}`} alt="" src={imgPost}/>
            <div className={`${styles.div0} container d-flex flex-column`}>
                <div className={`${styles.div1} d-flex flex-column`}>
                    <h3>{titlePost}</h3>
                    <div className='d-flex align-items-center'>
                        <div className='mr-2'>
                            <h5>Descrição:</h5>
                        </div>
                        <div>
                            <h5>{description}</h5>
                        </div>
                    </div>
                </div>
                <div className={`${styles.div2} ${roboto.className} d-flex justify-content-between align-items-end m-1`}>
                    <div className={`${styles.parameters} ${roboto.className} d-flex flex-column`}>
                    {fields.map((field, index) => (
                        field.value && (
                        <React.Fragment key={index}>
                            <div className="d-flex align-items-center">
                                <div className="ml-2">
                                    <h5>{field.label}</h5>
                                </div>
                                <div>
                                    <h5>{field.value}</h5>
                                </div>
                            </div>
                        </React.Fragment>
                        )
                    ))}
                    </div>
                    <div>
                        <Image className={`${styles.imgCategory}`} alt="" src={postCategory}/>
                    </div>
                </div>
            </div>
            <div className={`${styles.div3} d-flex flex-column mt-auto align-items-end`}>
                <Image className={`${styles.imgUser}`} alt="" src={imgUser}/>
                <div className="d-flex justify-content-between m-4">
                <p>{whatsapp}</p>
                <p>{email}</p>
                </div>
            </div>
      </div>
    )
}



  