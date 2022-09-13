import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
//import './style.css'

export function Main({ navbar, body, footer }) { // Destructurin Javascript
    return (
        <>
            <Navbar navbar={navbar} />

            <Body body={body} />

            <Footer footer={footer} />
        </>

    )

}

export default Main;