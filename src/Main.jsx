import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

export function Main({ navbar, body, cards, footer }) { // Destructurin Javascript
    return (
        <>
            <Navbar navbar={navbar} />

            <Body body={body} cards={cards} />

            <Footer footer={footer} />
        </>

    )

}

export default Main;