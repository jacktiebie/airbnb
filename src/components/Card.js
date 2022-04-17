import React from 'react'
import Katie from '../images/katie.png'
import Star from '../images/star.png'

export default function Card() {
    return (
        <div className='card-container'>
        <img src={Katie} alt="Image of Katie Zaferes" className="card-image" />
        <p className="sold-out">SOLD OUT</p>
        <div className="card-flex-container">
        <img src={Star} alt="Star" className="card-star" />
        <p className="card-rating">5.0</p>
        <p className="card-gray">(6) * USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
        </div>
    )
}

