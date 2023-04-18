import React from 'react';
import style from './Footer.module.css'


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Artur Hareksian</h2>
                <div className={style.footerDiv}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <p className={style.footerYear}>2023</p>
            </div>
        </div>
    );
};

export default Footer;