import { useState, useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = (props) => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setModal(true)
        }, 2000)
    }, [])


    return (
        <div className={styles.modal}>
        </div>
    )
}

export { Modal } ;