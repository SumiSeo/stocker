import React from "react";
  



class Photo extends React.Component  {
    state = {term:""};
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
        
    

    render(){
        return(
        <div>
            <div className="searchContainer">
                <form 
                onSubmit={this.onFormSubmit}
                className="searchForm">
                    <input
                     value={this.state.term}
                     onChange={(e)=>{this.setState({term:e.target.value})}}
                     type="text" 
                     className="searchInput"/>
                    <button className="searchButton">Search</button>
                </form>
            </div>
        </div>
            
        )
    }

}


// const Photo = () => {
//     const [term, setTerm] = useState("");

//     const onFormSubmit=(e)=>{
//         e.preventDefault();
//         console.log(term);
//     }

//     const onInputChange = (e) =>{
//         setTerm(e.target.value);
//     }

//     return (
//         <div>
//             <div className="searchContainer">
//                 <form onSubmit={onFormSubmit} className="searchForm">
//                     <input
//                      value={term} 
//                      onChange={onInputChange}
//                      type="text" 
//                      className="searchInput"/>
//                     <button className="searchButton">Search</button>
//                 </form>
//             </div>
//         </div>
//     )
// };


export default Photo;