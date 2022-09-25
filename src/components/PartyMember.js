import React from "react";

const PartyMember = ({image, children}) => {
    return (
        <div class="party-member">
            <div class="party-member-img-container">
                <div class="pink-box"></div>
                <img src={image}/>
            </div>
            {children}
        </div>
    )
}

export default PartyMember;