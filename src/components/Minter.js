import React, { Component } from 'react';
import serum1 from './../images/abstractserum.jpg';
import serum2 from './../images/pixelserum.jpg';
import serum3 from './../images/landscapeserum.jpg';
import serum4 from './../images/bionicserum.jpg';
import serum5 from './../images/qmark.jpg';

class Minter extends Component{
  render() {
        return (
            <div className="bkgrd container-fluid">
                <div className="ml-auto mr-auto centa flex-container">
                    <div><div className="focus mt-5 m-2"><a href="https://opensea.io/collection/cryptomories"><img width='175vh' height='175vh' style={{border: '5px solid lime'}} className=" mr-auto ml-auto mb-2" src={serum1} alt="Collage"/></a><h3 style={{fontSize: "3vh"}}>Abstract Serum</h3></div> <button onClick={(event) => {event.preventDefault(); this.props.mintserum(1)}} className="mintbtn">Mint</button> </div>
                    <div><div className="focus mt-5 m-2"><a href="https://opensea.io/collection/cryptomories"><img width='175vh' height='175vh' style={{border: '5px solid lime'}} className=" mr-auto ml-auto mb-2" src={serum2} alt="Collage"/></a><h3 style={{fontSize: "3vh"}}>Pixel Serum</h3></div> <button onClick={(event) => {event.preventDefault(); this.props.mintserum(2)}} className="mintbtn">Mint</button> </div>
                    <div><div className="focus mt-5 m-2"><a href="https://opensea.io/collection/cryptomories"><img width='175vh' height='175vh' style={{border: '5px solid lime'}} className=" mr-auto ml-auto mb-2" src={serum3} alt="Collage"/></a><h3 style={{fontSize: "3vh"}}>Landscape Serum</h3></div> <button onClick={(event) => {event.preventDefault(); this.props.mintserum(3)}} className="mintbtn">Mint</button> </div>
                    <div><div className="focus mt-5 m-2"><a href="https://opensea.io/collection/cryptomories"><img width='175vh' height='175vh' style={{border: '5px solid lime'}} className=" mr-auto ml-auto mb-2" src={serum4} alt="Collage"/></a><h3 style={{fontSize: "3vh"}}>Bionic Serum</h3></div> <button onClick={(event) => {event.preventDefault(); this.props.mintserum(4)}} className="mintbtn">Mint</button> </div>
                    <div><div className="focus mt-5 m-2"><a href="https://opensea.io/collection/cryptomories"><img width='175vh' height='175vh' style={{border: '5px solid lime'}} className=" mr-auto ml-auto mb-2" src={serum5} alt="Collage"/></a><h3 style={{fontSize: "3vh"}}> Serum 5</h3></div> <button onClick={(event) => {event.preventDefault(); this.props.mintserum(5)}} className="mintbtn">Mint</button> </div>
                </div>


          </div>
        )
    }
}

    export default Minter;