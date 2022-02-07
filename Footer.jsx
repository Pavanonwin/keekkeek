import React from 'react';

let year = new Date();
year=year.getFullYear();

const Footer = () => {
    return ( 
        <footer className='footer'> Copyright @ {year}</footer>

    );

}

export default Footer;