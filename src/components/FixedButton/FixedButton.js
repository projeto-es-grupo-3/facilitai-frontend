import styles from '@/components/FixedButton/FixedButton.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// @react-icons
import { FiPlus } from 'react-icons/fi';
import { BsBuildingsFill } from 'react-icons/bs';
import { MdOutlineSchool, MdCreate } from 'react-icons/md';
import { HiOutlineBookOpen } from 'react-icons/hi';

export default function FixedButton() {

    const [boxOpen, setBoxOpen] = useState(false);
    const router  = useRouter();

    const handlePushApto = (e) => {
        e.preventDefault()
        router.push("/posts/search-apartments")
    }

    const handlePushBook = (e) => {
        e.preventDefault()
        router.push("/posts/search-books")
    }

    return (
        <div className={`bg-custom4 d-lg-none d-flex justify-content-center align-items-center ${boxOpen ? styles.actionButtonActivated : styles.actionButton} `} onClick={() => setBoxOpen(!boxOpen)}>
            {
                !boxOpen ? <i><FiPlus className={`text-custom3 `} /></i> :
                    <div className="row d-flex justify-content-end">
                        <div className="col-12 fs-5 w-75 text-center">
                            Crie um anúncio ou selecione uma categoria para navegar!
                        </div>
                        <hr className="w-75" />
                        <div className="col-12 link w-75">
                            <div className="row">
                                <div className="col-3"><i><BsBuildingsFill /></i></div>
                                <div className="col-9">
                                    <Link className="fs-5 text-custom3" href="" onClick={handlePushApto}>
                                        <span>Apartamentos</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 link w-75">
                            <div className="row">
                                <div className="col-3"><i><HiOutlineBookOpen /></i></div>
                                <div className="col-9">
                                    <Link className="fs-5 text-custom3" href="" onClick={handlePushBook}>
                                        <span>Livros</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 link w-75">
                            <div className="row">
                                <div className="col-3"><i><MdOutlineSchool /></i></div>
                                <div className="col-9">
                                    <Link className="fs-5 text-custom3" href="/search?var=others">
                                        <span>Outros</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr className="w-75" />
                        <div className="col-12 link w-75">
                            <div className="row">
                                <div className="col-3"><i><MdCreate /></i></div>
                                <div className="col-9">
                                    <Link className="fs-5 text-custom3" href="/create-post">
                                        <span>Criar anúncio</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}