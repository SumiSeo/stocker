
import React from "react";
import ImageCard from "./ImageCard";
// import main from "../sass/main.scss";


const ImageList = (props)=>{

   const images = props.images.map((image) => {
        return (
        <ImageCard key={image.id} image={image}/>
        )
    });
  
    return  (
        
        <div className="image__list">{images}</div>
    )




};

export default ImageList;