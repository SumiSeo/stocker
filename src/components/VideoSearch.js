import React,{useState} from "react";


const VideoSearch=({onTermSubmit})=>{
    const [term, setTerm] = useState("");
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        onTermSubmit(term);
    };
 
    return(
        <div>
            <div className="searchContainer">
                <form 
                onSubmit={onFormSubmit}
                className="searchForm">
                    <input 
                    value={term}
                    onChange={(e)=> setTerm(e.target.value)}
                    className="searchInput"/>
                    <button className="searchButton">Search</button>
                </form>
            </div>
        </div>
    )
};

    

export default VideoSearch;