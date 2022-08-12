import React, { Component } from 'react';


class InfoPanel extends Component{
  render() {
        return (
            <div className="bkgrd container-fluid">
              <main role="main" className="col-lg-12 d-flex text-center">
                <div className="focus content mt-5 mb-5 mr-5 ml-5">
                  <h3>Ai Mories is an NFT derivative project of the CryptoMories NFT Collection.</h3>
                  <p>There exists 5 unique Ai Serums that can be given to a cryptomorie you own to create a special Ai Morie derivative dependent on the serum type used. You have the freedom to give a single cryptomorie all 5 serums, or even give all of your cryptomories a specific serum.</p>
                  <p>Below you can find the 5 Ai serums available to mint at 0.02 Eth each: Clicking the serum image will take you to that collection's opensea page.  </p>
                  <p>Below the Serums is the Alchemy Table. Pick the serum you would like to use and enter in the ID of the cryptomorie which you would like to use it on to generate a unique Ai Morie created from the traits of your morie. (Make sure both are in the wallet you are connected with!) The effects of the serum should take effect within 24 hours and your Ai Morie will soon appear! </p>
                </div>
              </main>
          </div>
        )
    }
}

    export default InfoPanel;