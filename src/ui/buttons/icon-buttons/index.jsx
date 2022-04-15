import React from 'react';
import PropTypes from 'prop-types';
import './icon-buttons.scss';

export default function ButtonIcon({className, icon, label, customClickEvent }) {

    return (
        <div tabIndex={0} className={`${className} pf-btn`} role='button' aria-label={label} onClick={customClickEvent || null}>
            <span className={`fa-solid ${icon}`}></span>
        </div>
    )
}

ButtonIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    customClickEvent: PropTypes.func
}
