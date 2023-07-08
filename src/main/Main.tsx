import React from 'react';
import style from './Main.module.scss'
// @ts-ignore
import me from '../assets/image/me.jpg'


const Main = () => {
    const meImg = {
        backgroundImage: `url(${me})`
    }

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span className={style.span}>Hi There</span>
                    <h1 className={style.h1}>I am Artur Hareksian</h1>
                    <p className={style.p}>Frontend Developer</p>
                </div>
                <div className={style.photo} style={meImg}></div>
            </div>
        </div>
    );
};

export default Main;