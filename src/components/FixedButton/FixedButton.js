import styles from '@/components/FixedButton/FixedButton.module.css';
import { useState } from 'react';
import Link from 'next/link';

// @react-icons
import { FiPlus } from 'react-icons/fi';
import { BsBuildingsFill } from 'react-icons/bs';
import { MdOutlineSchool, MdCreate } from 'react-icons/md';
import { HiOutlineBookOpen } from 'react-icons/hi';

export default function FixedButton() {

    const [boxOpen, setBoxOpen] = useState(false)

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
                                    <Link className="fs-5 text-custom3" href="/search?var=apartment">
                                        <span>Apartamentos</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 link w-75">
                            <div className="row">
                                <div className="col-3"><i><HiOutlineBookOpen /></i></div>
                                <div className="col-9">
                                    <Link className="fs-5 text-custom3" href="/search?var=books">
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
                                    <Link className="fs-5 text-custom3" href="/createpost">
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