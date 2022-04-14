import React from 'react'
import HeroImg from '../images/hero.png'

export default function Hero() {
    return (
        <div className="hero-container">
        <img src={HeroImg} alt="Pictures of different activities" className="hero-img"/>
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}