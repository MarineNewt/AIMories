import React, { Component } from 'react';
import twitter from './../images/twitter.png';

class Footer extends Component{
  render() {
        return (
            <div className="container-fluid" style={{backgroundColor: 'black'}}>

                <div className="mb-3 mr-auto ml-auto container">
                  <h1 style={{display: 'inline', color: 'white'}}>Ai Mories</h1>
                  <a href='https://twitter.com/AiMories' style={{display: 'inline', float: 'right', marginbottom: '1vw', marginTop: '1vw'}}><img width='60vw' height='60vw' className=" " src={twitter} alt="Collage"/></a>
                </div>

                <div>.</div>
                
          </div>
        )
    }
}

    export default Footer;