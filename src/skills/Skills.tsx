import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/Title';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<h2 className={style.title}>Skills</h2>*/}
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'TS'} description={'Lorem ipsum minus nihil suscipit voluptatum.'}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a at aut dolor, minus nihil suscipit voluptatum.'}/>
                    <Skill title={'REACT'} description={'Lorem ipsum dolor sit amet, co ssssssss . '}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;