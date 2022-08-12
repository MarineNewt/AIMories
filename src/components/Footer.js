import React, { Component } from 'react';
import aitwitter from './../images/aitwitter.jpg';
import moriestwitter from './../images/moriestwitter.jpg';
import devtwitter from './../images/devtwitter.jpg';
import pixtwitter from './../images/pixtwitter.jpg';

class Footer extends Component{
  render() {
        return (
            <div className="container-fluid" style={{backgroundColor: 'black'}}>

                <div className="mb-3 mr-auto ml-auto container">
                  <h1 style={{display: 'inline', color: 'white'}}>Ai Mories</h1>
                
                  <a href='https://twitter.com/Newt936' style={{display: 'inline', float: 'right', marginbottom: '1vw', marginTop: '1vw'}}><img width='60vw' height='60vw' className=" " src={devtwitter} alt="Collage"/></a>
                  <a href='https://twitter.com/Pixelmindai' style={{display: 'inline', float: 'right', marginbottom: '1vw', marginTop: '1vw'}}><img width='60vw' height='60vw' className=" " src={pixtwitter} alt="Collage"/></a>
                  <a href='https://twitter.com/CryptoMories' style={{display: 'inline', float: 'right', marginbottom: '1vw', marginTop: '1vw'}}><img width='60vw' height='60vw' className=" " src={moriestwitter} alt="Collage"/></a>
                  <a href='https://twitter.com/AiMories' style={{display: 'inline', float: 'right', marginbottom: '1vw', marginTop: '1vw'}}><img width='60vw' height='60vw' className=" " src={aitwitter} alt="Collage"/></a>

                </div>

                <div>.</div>
                
          </div>
        )
    }
}

    export default Footer;