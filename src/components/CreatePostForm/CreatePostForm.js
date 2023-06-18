import React, { useState } from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import predio from '../../../public/images/predio.png';
import capelo from '../../../public/images/capelo.png';
import livro from '../../../public/images/livro.png';

// @components
import styles from '@/components/CreatePostForm/CreatePostForm.module.css';
import SelectCategory from '@/components/CreatePostForm/SelectCategory';
import ImageUploader from '@/components/CreatePostForm/ImageUploader';
import FormField from '@/components/FormField/FormField';

// @react-icons
import { MdAttachMoney,MdHome,MdOutlineBedroomChild, MdOutlineTitle, MdOutlineDescription, MdApartment} from 'react-icons/md';
import { GiDramaMasks } from 'react-icons/gi';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function CreatePostForm({ SubmitPost }) {

  const aptoInputFields = [
    {
      label: 'Título',
      name: 'titulo',
      type: "text",
      icon: <MdOutlineTitle color='#fff' width={30} height={30} />
    },
    {
      label: 'Descrição',
      name: 'descricao',
      type: 'textarea',
      icon: <MdOutlineDescription color='#fff' width={30} height={30} />
    },
    {
      label: 'Preço',
      name: 'preco',
      type: "text",
      icon: <MdAttachMoney color='#fff' width={30} height={30} />
    },
    {
      label: 'Endereço',
      name: 'endereco',
      type: "text",
      icon: <MdHome color='#fff' width={30} height={30} />

    },
    {
      label: 'Área',
      name: 'area',
      type: "text",
      icon: <MdApartment color='#fff' width={30} height={30} />
    },
    {
      label: 'Número de quartos',
      name: 'comodos',
      type: "text",
      icon: <MdOutlineBedroomChild color='#fff' width={30} height={30} />
    },
  ];

  const bookInputFields = [
    {
      label: 'Título',
      name: 'titulo',
      type: "text",
      icon: <MdOutlineTitle color='#fff' width={30} height={30} />
    },
    {
      label: 'Título do Livro',
      name: 'tituloLivro',
      type: 'text',
      icon: <MdOutlineTitle color='#fff' width={30} height={30} />
    },
    {
      label: 'Descrição',
      name: 'descricao',
      type: 'textarea',
      icon: <MdOutlineDescription color='#fff' width={30} height={30} />
    },
    {
      label: 'Gênero',
      name: 'genero',
      type: "text",
      icon: <GiDramaMasks color='#fff' width={30} height={30} />
    },
    {
      label: 'Preço',
      name: 'preco',
      type: "text",
      icon: <MdAttachMoney color='#fff' width={30} height={30} />
    },
    {
      label: 'Aceita Troca?',
      name: 'troca',
      type: "text",
      icon: <MdOutlineTitle color='#fff' width={30} height={30} />
    },
  ];

  const otherInputFields = [
    {
      label: 'Título',
      name: 'titulo',
      type: 'text',
      icon: <MdOutlineTitle color='#fff' width={30} height={30} />
    },
    {
      label: 'Título',
      name: 'titulo',
      type: "text",
      icon: <MdOutlineTitle color='#fff' width={30} height={30} />
    },
    {
      label: 'Descrição',
      name: 'descricao',
      type: 'textarea',
      icon: <MdOutlineTitle color='#fff' width={30} height={30} />
    },
  ];

  let img;
  const [category, setCategory] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [data, setData] = useState({
    apto :{
      titulo: "",
      descricao:"",
      preco: "",
      endereco: "",
      area:"",
      comodos:"",
      categoria: "apartamento"
    }, 
    book:{
      titulo: "",
      tituloLivro: "",
      descricao: "",
      genero: "",
      preco: "",
      categoria: "livro",
      aceitaTroca: ""
    },
    other:{
      titulo: "",
      descricao: "",
      preco: "",
    }
  })
 
  const HandleSubmit = (e) => {
    e.preventDefault();
    let submit = {}
    if (category === 1) {
      submit = data.apto
    } else if (category === 2) {
      submit = data.book
    } else {
      submit = data.other
    }

    if (submit != {}){
      SubmitPost(submit);
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
      setData((data) => ({
        ...data,
        apto: {
          ...data.apto,
          [name]:value
        }
      }))
    } if (category === 2) {
      setData((data) => ({
        ...data,
        book: {
          ...data.book,
          [name]:value
        }
      }))
    } else {
      setData((data) => ({
        ...data,
        other: {
          ...data.other,
          [name]:value
        }
      }))
    }
  };

  if (category === 1) {
    img = (
      <Image className={`${styles.img}`} alt='' src={predio} />
    );
  } else if (category === 2) {
    img = (
      <Image className={`${styles.img}`} alt='' src={livro} />
    );
  } else if (category === 3) {
    img = (
      <Image className={`${styles.img}`} alt='' src={capelo} />
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
                {
                  category === 1 ? 
                    aptoInputFields.map((field) => (
                      <>
                      <FormField
                        key={"apto"+field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        icon={field.icon}
                        onChange={handleChange}
                      />
                      </>
                    ))
                  : category === 2 ? 
                    bookInputFields.map((field) => (
                      <FormField
                        key={"book"+field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        icon={field.icon}
                        onChange={handleChange}
                      />
                    ))
                  : 
                  otherInputFields.map((field) => (
                    <FormField
                      key={"other"+field.name}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      icon={field.icon}
                      onChange={handleChange}
                    />
                  ))
                }
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