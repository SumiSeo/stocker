import React from "react";
import Link from "./Link";

const Header = () =>{
    return(
        <header className="header">
                <nav className="header__container">
                    <ul className="header__links">
                        {/* <li className="header__link">Video</li> */}
                        <li className="header__link header__link--photo"><Link href="/photo">Photo</Link></li>
                        <li className="header__link header__link--title"><Link href="/">Stocker</Link></li>
                        <li className="header__link header__link--about"><Link href="/about">About</Link></li>
                        <li className="header__link header__link--contact"><Link href="mailto:qkobr94@gmail.com">Contact</Link></li>
                    </ul>
                </nav>
         </header>
    )



};


export default Header