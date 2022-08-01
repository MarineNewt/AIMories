import React, { Component } from 'react';
import serum1 from './../images/landscapeserum.jpg';
import serum2 from './../images/pixelserum.jpg';
import serum3 from './../images/bionicserum.jpg';
import serum4 from './../images/abstractserum.jpg';
import serum5 from './../images/qmark.jpg';
import dna from './../images/dna.jpg';
import banner1 from './../images/Beautiful_Bull_Landscape.jpg';
import banner2 from './../images/Waterfall_Bull_Morie.jpg';

class UseSerum extends Component{
  render() {
    const Mobile = window.innerWidth >= 1200 ? 'true' : 'false';
        return (
            <div className="bkgrd container-fluid">
                <div className="col-lg-12 d-flex text-center">
                    <div style={{blockSize: 'fit-content'}} className="content mt-5 mr-auto ml-auto">
                        <div className='focus container-fluid mt-5 mb-5' style={{height:'8vw', padding:0}}>
                            {Mobile === 'true' && <img style={{display: 'inline', float: 'left', width: '16.47vw', height: '7.3vw'}} className=" " src={banner1} alt="Collage"/>}
                            
                            {Mobile === 'true' && <img style={{display: 'inline', float: 'right',  width: '16.47vw', height: '7.3vw'}}className=" " src={banner2} alt="Collage"/> }
                            
                            <h1 style={{fontSize: '60px', dispaly: 'inline', marginBottom: '.6vw', marginTop: '.6vw'}} className="">Alchemy Table</h1>
                        </div>
                        <br></br>
                        <div className="focus">
                            <div>
                                <h2>Choose your serum:</h2>
                            </div>
                            <div className="ml-auto mr-auto flex">
                            <button className="nopad mr-1"><img width='175vh' height='175vh' className=" " src={serum1} alt="Collage" onClick={this.myfunction}/></button>
                            <button className="nopad mr-1"><img width='175vh' height='175vh' className=" " src={serum2} alt="Collage" onClick={this.myfunction}/></button>
                            <button className="nopad"><img width='175vh' height='175vh' className=" " src={serum3} alt="Collage" onClick={this.myfunction}/></button>
                            <button className="nopad ml-1"><img width='175vh' height='175vh' className=" " src={serum4} alt="Collage" onClick={this.myfunction}/></button>
                            <button className="nopad ml-1"><img width='175vh' height='175vh' className=" " src={serum5} alt="Collage" onClick={this.myfunction}/></button>
                            </div>
                        </div>
                        <br></br><br></br>
                        <form className="focus mb-5" onSubmit={(event) => {
                        event.preventDefault()
                        let target
                        target = this.input.value.toString()
                        this.props.fire(target)}}>   
                            <h2 className=''> Enter your Morie#:</h2>         
                            <input type="text" ref={(input) =>  { this.input = input }} className="form-control form-control-lg" placeholder="0000" required />
                            <button type="submit" className="btn btn-primary btn-block btn-lg" style = {{fontSize: "50px", color: "white", backgroundPosition: 'center center', backgroundImage: `url(${dna})`, backgroundColor: "lime", padding: '1vw'}} > Mint AiMorie </button>
                        </form>
                    </div>
                </div>
          </div>
        )
    }
}

    export default UseSerum;