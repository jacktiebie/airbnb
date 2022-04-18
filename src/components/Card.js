import React from 'react'
import Star from "../images/star.png"

export default function Card(props) {
    console.log()
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card-container'>
        <img src={`../images/${props.coverImg}`} alt="Image of Katie Zaferes" className="card-image" />
        {typeof badgeText !== 'undefined' && <p className="sold-out">{badgeText}</p>}
        <div className="card-flex-container">
        <img src={Star} alt="Star" className="card-star" />
        <p className="card-rating">{props.stats.rating}</p>
        <p className="card-gray">({props.stats.reviewCount}) * {props.location}</p>
        </div>
        <p>{props.title}</p>
        <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

