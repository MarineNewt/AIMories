import React, { Component } from 'react';
import image from '../images/aicollage.jpg';

class Intro extends Component{
  render() {
        return (
            <div className="bkgrd container-fluid mt-5">
              <main role="main" className="col-lg-12 d-flex text-center">
                <div className="focus content mt-5 mb-5 mr-auto ml-auto">
                  <h1>Ai Mories</h1>
                </div>
              </main>
              <img width='500vh' height='500vh' className="focus centa mr-auto ml-auto mb-5" src={image} alt="Collage"/>
              <div>.</div>
          </div>
        )
    }
}

    export default Intro;
