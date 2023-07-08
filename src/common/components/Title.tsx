import React, {FC} from 'react';
import style from './Title.module.scss'

type TitlePropsType = {
    title: string
}
const Title: FC<TitlePropsType> = ({title}) => {
    return (
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;