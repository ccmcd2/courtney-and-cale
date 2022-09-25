import React from "react";

const Hero = ({ image, className, children }) => {
    return (
        <div class={`hero ${className || ''}`}>
            <img src={image} className="hero-img"/>
            {children}
        </div>
    )
}

export default Hero;