import React from 'react'
import chef from '../assets/images/6.jpg';


function Tokenomics() {
  return (
      
    <section id="tokenomics">
        <div className="container">
            <h2>Tokenomics</h2>
            <div className="tokenomics-content">
                <div className="tokenomics-text">
                    {/* <p>Here you can provide information about the tokenomics of your PepeLeChef, such as:</p> */}
                    <ul className="list-group custom-list">
                        <li className="list-group-item btn btn-secondary">Token Name : PEPELECHEF</li>
                        <li className="list-group-item btn btn-secondary">Symbol : PCHEF</li>
                        <li className="list-group-item btn btn-secondary">Total token supply : 1Bilion</li>
                        <li className="list-group-item btn btn-secondary">Air drop : 100M</li>
                        <li className="list-group-item btn btn-secondary">Fair Launch : 900M</li>
                        {/* <!-- <li className="list-group-item btn btn-secondary">Chain : SOLANA</li> --> */}
                        <li className="list-group-item btn btn-secondary">Tax : 0/0</li>
                        <li className="list-group-item btn btn-secondary">Liquidity : Burned</li>
                        {/* <!-- <li className="list-group-item btn btn-secondary">Ownership : Revoked</li> --> */}

                    </ul>
                </div>
                <div className="tokenomics-image">
                    <img src={chef} alt="Tokenomics" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tokenomics
