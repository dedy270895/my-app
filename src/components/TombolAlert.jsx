import React from "react";

const TombolReact = ({text,onClickHandler}) =>{
    /*Event Handler dipindah ke Element Induk Parrent App.jsx dibuat props*/
    

    return <button onClick={onClickHandler}>{text}</button>;

}

export default TombolReact;