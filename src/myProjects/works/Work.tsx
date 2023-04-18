import React from 'react';
import style from './Works.module.css'


const Work = () => {
    return (
        <div className={style.work}>
            <div className={style.picture}>
                <p>Картинка</p>
                <button>Смотреть</button>
            </div>
            <p>Название проекта</p>
            <p>Краткое описание</p>
        </div>
    );
};


export default Work;