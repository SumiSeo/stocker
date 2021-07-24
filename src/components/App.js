import React from "react";
import main from "../sass/main.scss";
import Photo from "./Photo";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component{
    state = { images: []};
    onSearchSubmit= async(term) => {
       const response =  await Unsplash.get("/search/photos", {
            params: {query: term},
        });
    this.setState({images:response.data.results});
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
                        <Photo onSearchSubmit={this.onSearchSubmit}/>
                        <ImageList images={this.state.images}/>
                    </div>
                </main>
            </div>
        
    )}
}

export default App;