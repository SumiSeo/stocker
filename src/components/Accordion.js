import React from "react";

const Accordion =({items})=>{
    const renderedItems = items.map((item,index)=>{
        return (
            <div key={item.title}>
                <div 
                onClick={}
                className="accordionTitle active">
                    <i className={item.icon}></i>
                    {item.title}
                </div>
                <div className="accordionContent active">
                    <p>{item.content}</p>
                </div>
            </div>
        )
    });
    return (
        <div>{renderedItems}</div>
    )



};

export default Accordion;