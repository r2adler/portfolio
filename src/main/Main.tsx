import React from 'react';
import style from './Main.module.css'
import s from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={s.container}>
                <div className={style.greeting}>
                    <span>Hi there</span>
                    <h1>I am Artur Hareksian</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;