import userImg from '../../../public/images/perfil.png'
import Image from 'next/image'
import { Roboto } from 'next/font/google';


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function UserTab(){
    return(
        <div className={'d-flex flex-column align-items-center'} onClick={''} style={{ width: '150px', height: '150px'}}>
            <Image src={userImg} style={{ width: '108px', height: '108px'}}/>
            <h3 className={`${roboto.className}`}>Bem vindo</h3>
        </div>
    )
}