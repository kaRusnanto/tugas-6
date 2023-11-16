import React from 'react';
import style from './Container.module.css'

const Container = (props) => {
    const { children } = props
    return (
        <div className={style.container}>
            {children}
        </div>
    );
}

export default Container;