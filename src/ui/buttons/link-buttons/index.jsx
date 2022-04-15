import React from 'react';
import PropTypes from 'prop-types';
import './link-buttons.scss';
import { NavLink } from 'react-router-dom';

/**
 * @todo Change the component to be able to Route the user
 * @param {*} param0 
 * @returns 
 */
export default function LinkButton({children, className, path}) {
    return (
        <NavLink to={path} className={`${className} pf-btn ${({isActive}) => isActive ? 'active' : ''}`}>
            {children}
        </NavLink>
    )
}

LinkButton.propTypes = {
    path: PropTypes.string.isRequired
}