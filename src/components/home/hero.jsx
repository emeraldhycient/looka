import React from "react";
import armsmoky from "../../images/armsmoky.png";
function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="col-md-10 col-lg-10 col mx-auto">
          <div className="hero_container">
            <div className="col-md-5">
              <h4 id="herotext">
                Lookup Awesome <span className="primarytext"> NFTs</span>
              </h4>
              <h6 className="text-light">from OpenSea</h6>
            </div>
            <div className="col-md-5 col-sm-12" id="armsmoky">
              <img src={armsmoky} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
