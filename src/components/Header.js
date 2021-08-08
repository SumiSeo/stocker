import React from "react";

const Header = () =>{
    return(
        <header className="header">
                <nav className="header__container">
                    <ul className="header__links">
                        {/* <li className="header__link">Video</li> */}
                        <li className="header__link header__link--photo"><a href="/photo">Photo</a></li>
                        <li className="header__link header__link--title"><a href="/">Stocker</a></li>
                        <li className="header__link header__link--about"><a href="/accordion">About</a></li>
                        <li className="header__link header__link--contact"><a href="mailto:qkobr94@gmail.com">Contact</a></li>
                    </ul>
                </nav>
         </header>
    )



};


export default Header