import React,{useState} from "react";
// import main from "../sass/main.scss";

  

const Photo = ({onSearchSubmit})=>{
    const [term, setTerm] = useState("");
    const  onFormSubmit=(e)=>{
        e.preventDefault();
        onSearchSubmit(term);
    }
    return(
        <div>
            <div className="searchContainer">
                <form 
                onSubmit={onFormSubmit}
                className="searchForm">
                    <input
                     value={term}
                     onChange={(e)=>{setTerm(e.target.value)}}
                     type="text" 
                     className="searchInput"/>
                    <button className="searchButton">Search</button>
                </form>
            </div>
        </div>
            
        )
};




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