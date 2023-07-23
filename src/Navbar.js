import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Lang from './data/Lang.json';
import React, { useState, useEffect } from 'react';

const Navbar = ({ isLoggedIn, handleButtonClick, isEnglish, handleLanguageChange }) => {
    
    const [text, setText] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        if (isEnglish) {
            setText(Lang.enNav);
        } else {
            setText(Lang.frNav);
        }

        setIsPending(false);
    }, [isEnglish]);

    if (isPending){
        return <div>Loading...</div>
    }
    else {
        return (
            <nav className="navbar">
                <div className="links">
                    <Link to="/">{ text[0] }</Link>
                    <Link to="/Devices">{ text[1] }</Link>
                    <Link to="/Games">{ text[2] }</Link>
                    <Link to="/Shop">{ text[4] }</Link>
                    <Link to="/QA">{ text[5] }</Link>
                </div>
                <h3 className="nexgenTitle" >NEXGEN</h3>
                <Button className="ms-3 sign-in" onClick={handleButtonClick}>
                    {isLoggedIn ?  text[6]  : text[7]}
                </Button>
                <Button className="ms-3 sign-in" onClick={handleLanguageChange}>
                    {isEnglish ? 'FR' : 'EN'}
                </Button>
            </nav>

        );
    }
}
export default Navbar;