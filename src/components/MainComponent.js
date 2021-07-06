import { useEffect, useState } from 'react'; 
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';

function Main() {

    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default (Main);