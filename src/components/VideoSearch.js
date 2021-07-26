import React from "react";


class VideoSearch extends React.Component{
    state = {term:""};
    onInputChange = (e)=>{
        this.setState({term:e.target.value});
    };
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
        //Todo: Make sure we call callback from parent components
    };
    render(){
        return(
            <div>
                <div className="searchContainer">
                    <form 
                    onSubmit={this.onFormSubmit}
                    className="searchForm">
                        <input 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        className="searchInput"/>
                        <button className="searchButton">Search</button>
                    </form>
                </div>
            </div>
        )
      
    }

}

export default VideoSearch;