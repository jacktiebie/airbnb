import React from 'react'
import Star from "../images/star.png"

export default function Card(props) {
    return (
        <div className='card-container'>
        <img src={`../images/${props.img}`} alt="Image of Katie Zaferes" className="card-image" />
        <p className="sold-out">{props.soldOut}</p>
        <div className="card-flex-container">
        <img src={Star} alt="Star" className="card-star" />
        <p className="card-rating">{props.rating}</p>
        <p className="card-gray">({props.reviewCount}) * {props.country}</p>
        </div>
        <p>{props.title}</p>
        <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

