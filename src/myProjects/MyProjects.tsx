import React from 'react';
import style from '../myProjects/MyProjects.module.css'
import styleContainer from '../common/styles/Container.module.css';
import Work from './works/Work';


const MyProjects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;