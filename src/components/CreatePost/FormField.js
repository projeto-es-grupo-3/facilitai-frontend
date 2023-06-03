import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

const FormField = ({ label, name, type, value, onChange }) => {
    return (
        <div className={`${roboto.className} form-group mr-3 style={{ display: 'inline-block' }}`}>
          <label htmlFor={name} className="mr-1">{label}:</label>
          {type === 'textarea' ? (
            <textarea
              className="form-control"
              id={name}
              name={name}
              value={value}
              onChange={onChange}
            />
          ) : (
            <input
              type={type}
              className="form-control"
              id={name}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        </div>
      );
    }
export default FormField;
