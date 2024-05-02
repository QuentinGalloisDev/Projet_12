import React from 'react'
import Sit from '../Icons/Sit.svg'
import Bike from '../Icons/Bike.svg'
import Swim from '../Icons/Swim.svg'
import Weight from '../Icons/Weight.svg'
import '../style/sideBar.css'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='buttons'>
                <button><img src={Sit} alt='Icône de repos' /></button>
                <button><img src={Bike} alt='Icône de vélo' /></button>
                <button><img src={Swim} alt='Icône de nageur' /></button>
                <button><img src={Weight} alt="Icône d'haltère" /></button>
            </div>
            <div className='copyright'>
                <p>Copiryght, SportSee 2020</p>
            </div>

        </div>
    )
}
