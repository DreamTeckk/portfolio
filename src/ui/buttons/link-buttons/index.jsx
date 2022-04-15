import React from 'react';
import PropTypes from 'prop-types';
import './link-buttons.scss';

/**
 * @todo Change the component to be able to Route the user
 * @param {*} param0 
 * @returns 
 */
export default function LinkButton({children, className, path}) {
    return (
        <span className={`${className} pf-btn active`}>
            {children}
        </span>
    )
}

LinkButton.propTypes = {
    path: PropTypes.string.isRequired
}