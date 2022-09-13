import React from 'react';
//import ReactPropTypes from "prop-types";
import Header from './Header'
import Cards from './Cards'

const Body = ({ body, cards }) => {
    return (
        <div class="container px-4 px-lg-5">
            {/* <!-- Heading Row--> */}
            <div class="row gx-4 gx-lg-5 align-items-center my-4 mx-1 bg-light p-5">
                <div class="col-lg-12">
                    <h1 class="font-weight-light">A Warm Welcome!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam corrupti quibusdam, provident magni, excepturi dolores nulla suscipit labore eos deserunt quisquam ipsum quam sed illo earum quae laborum. Fugiat.</p>
                    <a class="btn btn-primary" href="#!">Call to Action!</a>
                </div>
            </div>
            {/* <!-- Content Row--> */}
            <Cards cards={cards} />
        </div>
    )
}


export default Body
