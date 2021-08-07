import React,{useState,useEffect} from "react";
import main from "../sass/main.scss";
import Photo from "./Photo";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";
import VideoSearch from "./VideoSearch";
import youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Accordion from "./Accordion";
import Route from "./Route";
import Header from "./Header";


const items = [
    { 
      title : "About Stocker",
      content : "React is a frond-end javascript framework",
      icon :"fas fa-laptop-code" 
    },
    {
      title : "About Developer",
      content : "React is a favorite JS library among engineers",
      icon:"fas fa-child"
    },
    { 
      title : "About Stacks",
      content : "You use React by creating components",
      icon: "fas fa-cubes"
    },

];






const App = () => {
    const [images,setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        onTermSubmit("new jersey")
    },[])

    const onSearchSubmit= async(term) => {
        const response =  await Unsplash.get("/search/photos", {
             params: {query: term},
         });
     setImages(response.data.results);

     };

    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
           params: {
               q:term
           }
       });
       setVideos(response.data.items);
       setSelectedVideo(response.data.items[0]);
   };
  
    

    return (
        
        <div>
            <Header/>
            <Route path="/">
                <Photo onSearchSubmit={onSearchSubmit}/>
                <ImageList images={images}/>
            </Route>
            <Route path="/video">
                <VideoSearch onTermSubmit={onTermSubmit}/>
                <VideoDetail video={selectedVideo}/>
                <VideoList 
                videos={videos} 
                onVideoSelect={(video)=>setSelectedVideo(video)}/>
            </Route>
            <Route path="/accordion">
                <Accordion items={items}/>
            </Route>
        </div>

    )
};



export default App;