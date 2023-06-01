import styles from '@/components/Form/Form.module.css'
import React from 'react';
import { MdOutlineVisibilityOff, MdOutlineAccountCircle, MdOutlineVisibility } from 'react-icons/md'
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Form() {

    return (
        <form className={`bg-custom1 rounded-3 shadow d-flex flex-column justify-content-between align-items-center ${styles.form}`} action="">
         
        </form>
    )
}