import React from 'react';
//import Navbar from './Navbar'

//import PropTypes from 'prop-types';

const Navbar = ({ navbar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#page-top">{navbar.logo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
//}

/* Navbar.propTypes = {
    navbar: PropTypes.object.isRequired,
}
 */
export default Navbar;