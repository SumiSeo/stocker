import React from "react";
import main from "../sass/main.scss";
// import Photo from "./Photo";
import Unsplash from "../api/Unsplash";
// import ImageList from "./ImageList";
import VideoSearch from "./VideoSearch";
import youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component{
    state = { images: []};
    state = { videos: [], selectedVideo:null};
    componentDidMount(){
        this.onTermSubmit("new jersey");
    }
    onSearchSubmit= async(term) => {
       const response =  await Unsplash.get("/search/photos", {
            params: {query: term},
        });
    this.setState({images:response.data.results});
    };


    onTermSubmit = async term => {
         const response = await youtube.get("/search", {
            params: {
                q:term
            }
        });
        this.setState({
            videos:response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video)=> {
        this.setState({selectedVideo:video});
    }


    render(){
    return (
            <div className="main">
                <header className="header">
                <nav className="header__container">
                    <ul className="header__links">
                        <li className="header__link"><a href="#">Photo</a></li>
                        <li className="header__link"><a href="#">Video</a></li>
                        <li className="header__link header__link--title"><a href="#">Stocker</a></li>
                        <li className="header__link"><a href="#">About</a></li>
                        <li className="header__link"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                </header>
                <main >
                    <div className="main__container">

                        <VideoSearch onTermSubmit={this.onTermSubmit}/>

                        <div className="main__column">
                        <div className="main__box"><VideoDetail video={this.state.selectedVideo}/></div>
                        <div className="main__box"> <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/></div>
                       
                        </div>
                    </div>
                </main>
            </div>
        
    )}
}

export default App;