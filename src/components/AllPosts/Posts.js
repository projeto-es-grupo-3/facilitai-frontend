import React from 'react';
import Post from '@/components/AllPosts/Post';
import styles from '@/components/AllPosts/AllPosts.module.css';


export default function Posts() {

  return (
    <div className={`${styles.postsBody} container d-flex flex-column`}>
      <Post
        titlePost="Título do Post"
        description="Descrição do Post"
        advertiser="Anunciante"
        price="R$ 100,00"
        address="Endereço do Post"
        area="100 m²"
        bedrooms="2 quartos"
        postCategory={require('../../../public/images/predio.png')}
        imgUser={require('../../../public/images/perfil.png')}
        imgPost={require('../../../public/images/imgApartamento.jpg')}
        whatsapp="1234567890"
        email="exemplo@exemplo.com"
      />
      <Post
        titlePost="Título do Post"
        description="Descrição do Post"
        advertiser="Anunciante"
        price="R$ 100,00"
        titleBook="Título do Livro"
        category="Categoria"
        author="Autor"
        genre="Gênero"
        postCategory={require('../../../public/images/livro.png')}
        imgUser={require('../../../public/images/perfil.png')}
        imgPost={require('../../../public/images/imgLivro.jpg')}
        whatsapp="1234567890"
        email="exemplo@exemplo.com"
      />
      <Post
        titlePost="Título do Post"
        description="Descrição do Post"
        advertiser="Anunciante"
        price="R$ 100,00"
        postCategory={require('../../../public/images/capelo.png')}
        imgUser={require('../../../public/images/perfil.png')}
        imgPost={require('../../../public/images/galeria.png')}
        whatsapp="1234567890"
        email="exemplo@exemplo.com"
      />
    </div>
  );
}







