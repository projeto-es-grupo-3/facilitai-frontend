import React, { useState } from 'react';
import FormField from './FormField';
import styles from '@/components/CreatePostForm/CreatePostForm.module.css';


  export default function FormApartamento() {
    
    const [dados, setDados] = useState({
        titulo: '',
        descricao: '',
        preco: '',
        area: '',
        status: '',
        genero: '',
        autor:'',
        numeroQuartos: '',
        whatsapp: '',
        instagram: ''
      });
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setDados((prevDados) => ({
          ...prevDados,
          [name]: value
        }));
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        // Envie os dados para o backend aqui
        console.log(dados);
        // Limpe os campos após o envio
        setDados({
          titulo: '',
          descricao: '',
          preco: '',
          area: '',
          endereco: '',
          numeroQuartos: '',
          whatsapp: '',
          instagram: ''
        });
      };
      
    const inputFields = [
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
        label: 'Área',
        name: 'area',
        type: 'text',
      },
      {
        label: 'Endereço',
        name: 'Endereco',
        type: 'text',
      },
      {
        label: 'Número de quartos',
        name: 'numeroQuartos',
        type: 'text',
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

    return (
      <div className={`${styles.formWrapper} form-wrapper`}>
        <form onSubmit={handleSubmit} className={`${styles.formScrollable} form-scrollable`}>
          {inputFields.map((field) => (
            <div className="form-inline" key={field.name}>
              <FormField
                label={field.label}
                name={field.name}
                type={field.type}
                value={dados[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </div>
    );
  }