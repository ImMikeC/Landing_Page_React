import React from "react";
import PropTypes from 'prop-types';



const Card = ({ id, photo, title, description, btn }) => {
    return (
        <div className="col-md-3 mb-5">
            <div className="card h-100 text-center">
                <div className="card-body">
                <img src={photo} class="card-img-top" alt="" />
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
    );
};
Card.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Card;


