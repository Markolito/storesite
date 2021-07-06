import { useEffect, useState } from 'react'; 
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { render } from '@testing-library/react';

function Main() {

        return (
            <div>
                <Header />
                <Home />
            </div>
        );

}

export default Main;