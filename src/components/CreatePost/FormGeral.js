import React, { useState } from 'react';
import FormField from './FormField';
import styles from '@/components/CreatePost/CreatePost.module.css';

  export default function FormGeral() {
    
    const [dados, setDados] = useState({
        titulo: '',
        descricao: '',
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