import React from "react";

const Header = () =>{
    return(
        <header className="header">
                <nav className="header__container">
                    <ul className="header__links">
                        <li className="header__link"><a href="/">Photo</a></li>
                        <li className="header__link"><a href="/video">Video</a></li>
                        <li className="header__link header__link--title">Stocker</li>
                        <li className="header__link"><a href="/accordion">Accordion</a></li>
                        <li className="header__link"><a href="mailto:qkobr94@gmail.com">Contact</a></li>
                    </ul>
                </nav>
         </header>
    )



};


export default Header