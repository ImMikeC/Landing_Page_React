import React from "react";
import Card from "./Card";
//import PropTypes from 'prop-types';



const Cards = ({ cards }) => {
    return (
        <div className="row gx-4 gx-lg-5">
            {cards.map(
                ({ id, photo, title, description, btn }, index) => {
                    return (
                        <Card id={id} photo={photo} title={title} description={description} btn={btn}/>
                    );
                }
            )}
        </div>
    );
};
/* Cards.propTypes = {
    cards: PropTypes.array.isRequired
}; */

export default Cards;