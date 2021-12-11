import React from "react";
import "../../../../../css/style.css"
import {NavLink} from "react-router-dom";
import logo from "../../../../../img/food-band/preview.jpg";
function RestaurantsCards (props) {
    const data = require('../../../../../db/db.json');

    return (
        <NavLink to={`/restaurant/${props.products}`} className="card card-restaurant">
                <img src={props.image} alt="" className="card-image"/>
                <div className="card-text">
                    <div className="card-heading">
                        <h3 className="card-title">{props.name}</h3>
                        <span className="card-tag tag">{props.timeDelivery} мин</span>
                    </div>
                    <div className="card-info">
                        <div className="rating">
                            {props.stars}
                        </div>
                        <div className="price">От {props.price} ₽</div>
                        <div className="category">{props.kitchen}</div>
                    </div>

                </div>

        </NavLink>
    )
}



export default RestaurantsCards;