import React from "react";
import './Scroll.css'

const Scroll = (props)=>{
    return (
            <div className="container2" style={{overflowY:'scroll',border:'5px solid black',height:'800px'}}>
                {props.children}   
            </div>
    );
};

export default Scroll;