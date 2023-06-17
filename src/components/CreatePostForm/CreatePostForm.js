import React, { useState, useRef } from 'react';
import { Roboto } from 'next/font/google';
import styles from '@/components/CreatePostForm/CreatePostForm.module.css';
import SelectCategory from '@/components/CreatePostForm/SelectCategory';
import Image from 'next/image';
import predio from '../../../public/images/predio.png';
import capelo from '../../../public/images/capelo.png';
import livro from '../../../public/images/livro.png';
import ImageUploader from '@/components/CreatePostForm/ImageUploader';
import FormField from '../FormField/FormField';
import { MdAttachMoney, MdHome, MdOutlineBedroomChild, MdOutlineTitle, MdOutlineDescription } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function CreatePostForm({SubmitPost, children}) {

  let inputFields = [{}]
  let img;
  
  const [category, setCategory] = useState(2);
  const [selectedImage, setSelectedImage] = useState('');
  const [apto, setApto] = useState({
    titulo: '',
    descricao: '',
    preco: '',
    area: '',
    endereco: '',
    numeroQuartos: '',
    whatsapp: '',
    gmail: ''
  });
  const [book, setBook] = useState({
    titulo: '',
    descricao: '',
    preco: '',
    status: '',
    genero: '',
    autor:'',
    whatsapp: '',
    gmail: ''
  });

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (category === 1) {
      console.log(apto);
    }
  }
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleImageSelect = (imageData) => {
    setSelectedImage(imageData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (category === 1) {
      setApto((prevDados) => ({
        ...prevDados,
        [name]: value
      }));
    } if (category === 2) {


    }
  };
  
  if (category === 1) {

    inputFields = [
      {
        label: 'Título',
        name: 'titulo',
        type: 'text',
        icon: <MdOutlineTitle color='#fff' width={30} height={30}/>
      },
      {
        label: 'Descrição',
        name: 'descricao',
        type: 'textarea',
        icon: <MdOutlineDescription color='#fff' width={30} height={30}/>
      },
      {
        label: 'Preço',
        name: 'preco',
        type: 'text',
        icon: <MdAttachMoney color='#fff' width={30} height={30}/>
      },
      {
        label: 'Área',
        name: 'area',
        type: 'text',
        icon: ''
      },
      {
        label: 'Endereço',
        name: 'endereco',
        type: 'text',
        icon: <MdHome color='#fff' width={30} height={30}/>
  
      },
      {
        label: 'Número de quartos',
        name: 'numeroQuartos',
        type: 'text',
        icon: <MdOutlineBedroomChild color='#fff' width={30} height={30}/>
      },
      {
        label: 'WhatsApp',
        name: 'whatsapp',
        type: 'text',
        icon: <IoLogoWhatsapp color='#fff' width={30} height={30}/>
      },
      {
        label: 'Gmail',
        name: 'gmail',
        type: 'text',
        icon: <SiGmail color='#fff' width={30} height={30}/>
      },
    ];
    img = (
        <Image className={`${styles.img}`} alt='' src={predio} />
    );
  } else if (category === 2) {
    inputFields = [
      {
        label: 'Título',
        name: 'titulo',
        type: 'text',
      },
      {
        label: 'Descrição',
        name: 'descricao',
        type: 'textarea',
      },
      {
        label: 'Preço',
        name: 'preco',
        type: 'text',
      },
      {
        label: 'Status',
        name: 'status',
        type: 'text',
      },
      {
        label: 'Gênero',
        name: 'genero',
        type: 'text',
      },
      {
        label: 'Autor',
        name: 'autor',
        type: 'text',
      },
      {
        label: 'WhatsApp',
        name: 'whatsapp',
        type: 'text',
      },
      {
        label: 'Gmail',
        name: 'gmail',
        type: 'text',
      },
    ];
    img = (
        <Image className={`${styles.img}`} alt='' src={livro} />
    );
  } else if (category === 3) {

    inputFields = [
      {
        label: 'Título',
        name: 'titulo',
        type: 'text',
      },
      {
        label: 'Descrição',
        name: 'descricao',
        type: 'textarea',
      },
      {
        label: 'WhatsApp',
        name: 'whatsapp',
        type: 'text',
      },
      {
        label: 'Instagram',
        name: 'instagram',
        type: 'text',
      },
    ];
    
    img = (
        <Image className={`${styles.img}`}  alt='' src={capelo} />
    );
  }

  return (
    <div className="row">
      <SelectCategory category={category} onCategoryChange={handleCategoryChange} />
      
      <div className="col-12 bg-custom1 rounded mb-5">
        <div className="row">
          <div className="col-12 order-0 order-md-0 col-md-4 ">
            <ImageUploader selectedImage={selectedImage} onImageSelect={handleImageSelect} />
          </div>
          <div className="col-12 order-2 order-md-1 col-md-5">
              <div className="row d-flex justify-content-center ">
                    <form className={`d-flex flex-column align-items-center ${styles.form}`}>
                      {inputFields.map((field) => (
                          <FormField
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            value={category === "1" ? apto[field.name] : book[field.name]
                            }
                            icon={field.icon}
                            onChange={handleChange}
                          />
                      ))}
                  </form>
                  <button className={`${styles.button} ${roboto.className} mb-4`} onClick={e => HandleSubmit(e)}>Criar</button>
              </div>
          </div>
          <div className="col-12 order-1 order-md-2 col-md-3 d-flex justify-content-center align-items-center">
            {img}
          </div>
        </div>
      </div> 
    </div>
  );
}