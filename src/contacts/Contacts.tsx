import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title";


const Contacts = () => {

    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={'Contact'}/>
                <div className={style.formContainer}>
                    <form className={style.form}>
                        <input className={style.input} placeholder={'Name'}/>
                        <input className={style.input} placeholder={'E-mail'}/>
                        <textarea className={style.input} id="" cols={30} rows={10}
                                  placeholder={'Your message'}></textarea>
                    </form>
                </div>
                <button type={"submit"} className={style.button}>SEND MESSAGE</button>
            </div>
        </div>
    );
};

export default Contacts;