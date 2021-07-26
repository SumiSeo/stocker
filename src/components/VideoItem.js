import React from "react";

const VideoItem =({ video, onVideoSelect })=>{
    return (
        <div onClick={()=>onVideoSelect(video)} className="videoBox">
            <div className="videoImg"> 
            <img 
            alt={video.snippet.description} 
            src={video.snippet.thumbnails.medium.url}/>
            </div>
            <div className="videoContent">
            <h2 className="videoTitle">{video.snippet.title}</h2>
            <span className="videoInfo">{video.snippet.description}</span>
            </div>
        </div>
    )
};

export default VideoItem;