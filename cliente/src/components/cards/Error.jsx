import React from 'react'
import pika from "./pika.jpg"
import "./error.css"


function Error() {
  return (
      <div className="container">
          <div className="card">
              <div>
                  <h2 className="titulo"> NO SE ENCONTRO COINCIDENCIA </h2>
              </div>
              <div className="pik">
                  <img src={pika} alt="imagen" />
              </div>
          </div>
      </div>
  );
}

export default Error