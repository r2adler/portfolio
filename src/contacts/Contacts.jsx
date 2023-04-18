import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";


const Contacts = () => {

    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.formContainer}>
                    <form>
                        <input />
                        <input />
                        <textarea name="" id="" cols="30" rows="10" placeholder={'<textarea>'}></textarea>
                    </form>
                </div>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;