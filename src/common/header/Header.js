import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Head></Head>
            <Search></Search>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;