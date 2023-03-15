import React from "react";



let Card = (props) => {
    return (
   
        <div className="col card p-0">
        <img src={props.img} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
    </div>
  
    )
}

export default Card;