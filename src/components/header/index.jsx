import React, { useState } from 'react';
import ButtonIcon from '../../ui/buttons/icon-buttons';
import './index.scss';
import logo from '../../assets/images/logo2.png';
import { Col, Container, Row } from 'react-bootstrap';
import LinkButton from '../../ui/buttons/link-buttons';

/**
 * @todo Change the logo to be clickable to redirect to /home
 * @returns Header template
 */
export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-100 py-3">
            <Container>
                <Row className="position-relative align-item-center">
                    <Col xs={'auto'} className='align-items-center d-md-flex'>
                        <ButtonIcon className='d-md-none' label='toggle-menu' icon='fa-bars' customClickEvent={() => setIsOpen(!isOpen)} />
                        <nav className={`${isOpen ? 'open' : ''}`}>
                            <ul className='d-md-flex flex-row justify-content-start list-unstyled mb-0 p-3 p-md-0'>
                                <LinkButton path='/home' className='mb-3 mb-md-0 me-md-4'>Home</LinkButton>
                                <LinkButton path='/experiences' className='mb-3 mb-md-0 me-md-4'>Experience</LinkButton>
                                <LinkButton path='/education' className='mb-3 mb-md-0 me-md-4'>Education</LinkButton>
                                <LinkButton path='/games' className='mb-3 mb-md-0 me-md-4'>Video Games</LinkButton>
                            </ul>
                        </nav>
                    </Col>
                    <Col>
                        <img className='logo d-block float-end' src={logo} alt="DreamTeck logo" />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
