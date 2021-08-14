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
      content : "With this applicatioin, you can find chunk of pictures whole over the world!",
      icon :"fas fa-laptop-code" 
    },
    {
      title : "About Developer",
      content : "I am full-stack developer who loves building websites by using HTML, CSS, JS, and React.",
      icon:"fas fa-child"
    },
    { 
      title : "About Stacks",
      content : 'To lay out "Stocker", I used predominantly React-Hooks system.',
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
             params: {
                 query: term,
                 per_page: 30},
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
            <main>
                <Header/>
                <Route path="/video">
                    <VideoSearch onTermSubmit={onTermSubmit}/>
                    <VideoDetail video={selectedVideo}/>
                    <VideoList 
                    videos={videos} 
                    onVideoSelect={(video)=>setSelectedVideo(video)}/>
                </Route>
                <Route path="/">
                    <Photo onSearchSubmit={onSearchSubmit}/>
                    <ImageList images={images}/>
                </Route>
                <Route path="/photo">
                    <Photo onSearchSubmit={onSearchSubmit}/>
                    <ImageList images={images}/>
                </Route>
                <Route path="/about">
                    <Accordion items={items}/>
                </Route>    
            </main>
        </div>

    )
};



export default App;