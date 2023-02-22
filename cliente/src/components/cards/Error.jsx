import React from 'react'
import pika from "./pika.jpg"
import "./error.css"


function Error() {
  return (
      <div className="container">
      <div className="card">
        <h2 className="titulo"> NO SE ENCONTRO NADA </h2>
        <img src={pika} alt="imagen" />
      </div>
      </div>
  );
}

export default Error