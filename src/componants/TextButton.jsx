import React from 'react';
import '../common/TextButton.module.scss'

export const textbutton = ({children, onClick }) => {
    return (<div className="text-button" onClick={onClick}>
        {children}
    </div>)
}