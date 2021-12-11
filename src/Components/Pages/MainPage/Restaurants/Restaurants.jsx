import React from "react";
import "../../../../css/style.css"
import RestaurantsCards from "./RestaurantsCards/RestaurantsCards";

function Restaurants(props) {
    const data = require('../../../../db/db.json');
    let restaurantsCard = data.db.partners.map(card => <RestaurantsCards
        name={card.name}
        image={card.image}
        timeDelivery={card.timeDelivery}
        stars={card.stars}
        price={card.price}
        kitchen={card.kitchen}
        products={card.products}
    />)
    return (
        <div className="cards cards-restaurants">
                {restaurantsCard}
        </div>
    )
}


export default Restaurants;