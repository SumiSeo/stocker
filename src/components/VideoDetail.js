import React from "react";

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
    <div>
        <div className="embed">
            <iframe title="videoPlayer" src={videoSrc} />
        </div>
        <div className="detailContent">
            <h4 className="detailHeader">{video.snippet.title}</h4>
            <p className="detailDes">{video.snippet.description}</p>
        </div>
    </div>
    )


};

export default VideoDetail;