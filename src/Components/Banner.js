import React from 'react'
import Logo from './Logo'
import image from '../Icons/logo.svg'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <div className='banner'>
            <Logo>
                <img src={image} alt='Le logo SportSee' />
            </Logo>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/">Profil</Link>
                <Link to="/">Réglage</Link>
                <Link to="/">Communauté</Link>
            </nav>
        </div>
    )
}
