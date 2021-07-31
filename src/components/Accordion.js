import React, { useState } from "react";

const Accordion =({items})=>{
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) =>{
        setActiveIndex(index);
    }
    const renderedItems = items.map((item,index)=>{
        const active = index === activeIndex ? "active" : "";
        return (
            <div onClick={()=>{onTitleClick(index)}} className="accordionBox" key={item.title}>
                <div 
                
                className={`accordionTitle ${active}`}>
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                </div>
                <div className={`accordionContent ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    });
    return (
        <div className="accordion">
        <div className="accordionContainer">{renderedItems}</div>
        </div>
    )



};

export default Accordion;