import React from 'react';
import { Roboto } from 'next/font/google';
import styles from '@/components/FormField/FormField.module.css';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

const FormField = ({ label, name, type, value, icon, onChange }) => {
    return (

      <div className={`${styles.inputField}`}>
                {type === 'textarea' ? (
                  <textarea
                    required
                    id={label}
                    name={name}
                    onChange={e => onChange(e)}
                    />) :  <input type={type}  required id={label} name={name} onChange={e => onChange(e)} />
                }
                <label className={roboto.className} htmlFor={label}>{label}</label>
              {
                icon == "" ? <></> :<i>{icon}</i>
              }                
      </div>
      );
    }
export default FormField;

// <div className={`${roboto.className} form-group mr-3`}>
//           <label htmlFor={name} className="mr-1">{label}:</label>
//           {type === 'textarea' ? (
//             <textarea
//               className="form-control"
//               id={name}
//               name={name}
//               value={value}
//               onChange={onChange}
//             />
//           ) : (
//             <input
//               type={type}
//               className="form-control"
//               id={name}
//               name={name}
//               value={value}
//               onChange={onChange}
//             />
//           )}
//         </div>
