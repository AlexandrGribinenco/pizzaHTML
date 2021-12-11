import React, {useState} from "react";
import "./ResteurantPageCard.css";
import Modal from "../Modal/Modal";

const RestaurantPageCard = (props) => {
     const [modalActive,setModalActive] = useState(true);
    return(
        // <Modal active={modalActive} setActive={setModalActive}>
            <div id={props.id} className="card" onClick={() => setModalActive(true)}>
                <img src={props.image} alt="" className="card-image"/>
                <div className="card-text">
                    <div className="card-heading">
                        <h3 className="card-title card-title-reg">{props.name}</h3>
                    </div>

                    <div className="card-info">
                        <div className="ingredients">
                            {props.description}
                        </div>
                    </div>

                    <div className="card-buttons">
                        <button className="button button-primary button-add-cart">
                            <span className="button-card-text">В корзину</span>
                            <span className="button-cart-svg"></span>
                        </button>
                        <strong className="card-price-bold">{props.price} ₽</strong>
                    </div>
                </div>
            </div>
        // </Modal>
    )
}
export default RestaurantPageCard;