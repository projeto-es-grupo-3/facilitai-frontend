import React, { useState } from 'react';
import { Roboto } from 'next/font/google';
import styles from '@/components/FormField/FormField.module.css';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

const FormField = ({ label, name, type, icon, onChange }) => {

  const [field, setField] = useState("")

  const handleChange = (e) => {
    setField(e.target.value);
    onChange(e)
  }
  return (
      <div className={`${styles.inputField}`}>
                {type === 'textarea' ? (
                  <textarea
                    required
                    id={label}
                    name={name}
                    value={field}
                    onChange={e => handleChange(e)}
                    />) :  <input type={type} required id={name} name={name} value={field} onChange={e => handleChange(e)} />
                }
                <label className={roboto.className} htmlFor={name}>{label}</label>
              {
                icon == "" ? <></> :<i>{icon}</i>
              }                
      </div>
      );
    }
export default FormField;