import React from 'react';
// import styles from '../common/Common.scss';

export const textbutton = ({children, onClick }) => {
    return (<div className="text-button" onClick={onClick}>
        {children}
    </div>)
}