import React, { useState,useEffect } from "react";
import axios from "axios";

import salesforce from '../images/salesforce.jpg'
import levis from '../images/levis.jpg'
import cotopaxi from '../images/cotopaxi.jpg'
import curology from '../images/curology.jpg'
import normMacdonald from '../images/normMacdonald.jpg'
import purple from '../images/purple-display-ads.jpg'
import valentino from '../images/valentino.jpg'

function Ads() {

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
        <img height="300px" width="300px" src={levis} alt="" />
        <h4>Levi's</h4>
        </div>
        <div className="col">
        <img height="300px" width="300px" src={salesforce} alt="" />
        <h4>salesforce</h4>
        </div>
        <div className="col">
        <img height="300px" width="300px" src={cotopaxi} alt="" />
        <h4>cotopaxi</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <img height="300px" width="300px" src={normMacdonald} alt="" />
        <h4>Netflix</h4>
        </div>
        <div className="col">
        <img height="300px" width="300px" src={valentino} alt="" />
        <h4>Valentino</h4>
        </div>
        <div className="col">
        <img height="300px" width="300px" src={curology} alt="" />
        <h4>Curology</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <img height="300px" width="300px" src={purple} alt="" />
        <h4>Purple</h4>
        </div>
      </div>
    </div>
  );
}

export default Ads;
