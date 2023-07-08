import React, {FC} from 'react';
import style from './Project.module.scss'

type WorkPropsType = {
    image: any
    title: string
    description: string
}

const Project: FC<WorkPropsType> = ({title, description, image}) => {
    return (
        <div className={style.work}>
            <div className={style.picture} style={image}>
                <a className={style.viewBtn}>Смотреть</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{title}</h3>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    );
};


export default Project;