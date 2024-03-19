import React from 'react';
import chef from '../assets/images/6.jpg';
import { copyTokenToClipboard } from '../util/landing';

function About() {
  const copyToken = () => {
    const tokenElement = document.querySelector('.token');
    const tokenText = tokenElement.textContent.trim();
    copyTokenToClipboard(tokenText);
  };

  return (
    <section id="about">
      <div className="container">
        <h2>About PepeLeChef</h2>
        <div className="about-content">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-image">
                <img src={chef} alt="PepeLeChef" />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-text">
                <p>
                  Token :{' '}
                  <span className="token" onClick={copyToken}>
                    2MtpcP2NpriS3v8xYVHg1fYfcLbWHSD5KP73EGuyyMKo
                    <i className="fas fa-copy copy-icon"></i>
                  </span>
                </p>
                <p>
                  In the bustling kitchens of the internet, Pepe the Frog grew
                  weary of his existence as just a meme. Yearning for greater
                  culinary heights, he was struck by inspiration one night while
                  enduring a lackluster bowl of ramen. Shedding his fedora for a
                  chef's hat, Pepe embarked on a transformative journey to
                  become PepeLeChef. With "Feels Good Kitchen," he introduced
                  unprecedented dishes like Doge's tear truffle sauce and
                  Wojak's dread dark chocolate mousse, captivating the online
                  world with his innovative creations.
                </p>

                <p>
                  PepeLeChef's fame skyrocketed as critics and investors
                  clamored for a taste of his genius. His "Rare Pepe Perfection"
                  dish became the stuff of legend, while online cooking shows
                  showcased his chaotic charm and culinary prowess. Through his
                  endeavors, Pepe evolved from a mere chef to a symbol of hope,
                  proving that even in the depths of internet culture, greatness
                  could be achieved by anyone, even a feeling frog.
                </p>

                <p>
                  Join us in our mission to create a decentralized and
                  meme-powered ecosystem!
                </p>
                <div className="button-container">
                  <a
                    target="_blank"
                    href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2MtpcP2NpriS3v8xYVHg1fYfcLbWHSD5KP73EGuyyMKo&outputSymbol=2MtpcP&fixed=in"
                    className="btn btn-primary btn-buy"
                    rel="noreferrer"
                  >
                    <i className="fas fa-shopping-cart"></i> Buy
                  </a>
                  <a
                    target="_blank"
                    href="https://dexscreener.com/solana/2MtpcP2NpriS3v8xYVHg1fYfcLbWHSD5KP73EGuyyMKo"
                    className="btn btn-secondary btn-chart"
                    rel="noreferrer"
                  >
                    <i className="fas fa-chart-line"></i> Chart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
