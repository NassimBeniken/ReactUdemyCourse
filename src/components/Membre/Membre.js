import React from 'react'
import './Membre.css'

const Membre = ({ membre }) => {
    return (
        <div className="container">
            <p className="paragraph">Membre de ma famille : {membre}</p>
        </div>
    )
}

export default Membre