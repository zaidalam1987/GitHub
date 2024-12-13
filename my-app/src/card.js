import React from "react";
import "./card.css"
const Card = (props) => {
    return (
        <div className="Card">
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
        </div>
    )   
}
export default Card;