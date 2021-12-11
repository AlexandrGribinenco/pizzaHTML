import React, {useState} from "react";
import RestaurantPageCard from "./RestaurantPageCard/RestaurantPageCard";
import {useParams} from "react-router-dom";
import Modal from "./Modal/Modal";

function RestaurantPage(props) {

    const { products } = useParams();

    const data = require('../../../db/db.json');

    const restName = data.db.partners.find(el => el.products === products);

    let restaurantsPageCard = data.db[products].map(card => <RestaurantPageCard
        id={card.id}
        name={card.name}
        description={card.description}
        price={card.price}
        image={card.image}
    />)
    return (

        <main className="main">
            <div className="container">
                <section className="menu">
                    <div className="section-heading">
                        <h2 className="section-title restaurant-title">{restName.name}</h2>
                        <div className="card-info">
                            <div className="rating">
                                {restName.stars}
                            </div>
                            <div className="price">От {restName.price} ₽</div>
                            <div className="category">{restName.kitchen}</div>
                        </div>
                    </div>
                    <div className="cards cards-menu">
                            {restaurantsPageCard}
                    </div>
                </section>
            </div>

        </main>
    )
}

export default RestaurantPage;