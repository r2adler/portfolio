import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/Title';

// @ts-ignore
import socialImg from '../assets/image/download.jpg'
// @ts-ignore
import todolistImg from '../assets/image/leopard.jpg'


const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.works}>
                    <Project image={todolist} title={'Todolist'} description={'Краткое описание'}/>
                    <Project
                        image={social}
                        title={'Social network'}
                        description={'Краткое опsfsdfsd sdfsdfsdf sdfsdfsd fsdfsdf sdfsdfs sdfsdf sdf исание'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;