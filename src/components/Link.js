import React from "react";

const Link = ({href, className, children}) =>{
    if(href!=="mailto:qkobr94@gmail.com"){
    const onLinkClick=(e)=>{
        if(e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault();
        window.history.pushState({},"",href);
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    };

    return (
    <a 
    onClick={onLinkClick}
    className={className} 
    href={href}>{children}</a>
    );

    }
    return <a className={className} href={href}>{children}</a>;

};


export default Link;