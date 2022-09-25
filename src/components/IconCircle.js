import React from "react";

const IconCircle = ({image, className}) => {
    return (
        <div class={`icon-circle ${className || ''}`}>
            <img src={image}/>
        </div>
    );
}

export default IconCircle;