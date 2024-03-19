import React, { useEffect } from 'react';
import { startCountdown } from '../util/landing';

function Airdrop() {
  useEffect(() => {
    startCountdown();
  }, []);

  return (
    <section id="airdrop">
      <div className="container">
        <h2>Airdrop</h2>
        <div className="countdown-container">
          <div id="countdown"></div>
        </div>
        <div id="airdrop-form-container">
          <form
            id="airdrop-form"
            action="/index/index/post.html"
            method="post"
            className="col-12 d-sm-block mx-auto"
            data-lpignore="true"
          >
            <div className="form-group">
              <input type="hidden" name="sharecode" value="" />
              <input
                name="solana_address"
                className="form-control form-control-sm"
                type="text"
                placeholder="Your Solana address"
              />
              <input
                name="twitter_address"
                className="form-control form-control-sm"
                type="text"
                placeholder="Your Twitter address"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Participate
              </button>
            </div>
          </form>
          <div className="airdrop-info">
            <p>
              1. Copy and share your referral link, you and the invitee will be
              rewarded 100,000,000 PCHEF. Invite up to 20 people.
            </p>
            <p>
              2. Own a Solana (Mobile of the 117,497 Solana Mobile holders will
              receive 5% PCHEF tokens.)
            </p>
            <p>
              3. Connect your Twitter, follow{' '}
              <a href="https://twitter.com/pepelechef_" target="_blank" rel="noreferrer">
                @pepelechef_
              </a>
              .
            </p>
            <p>
              4. Participate in PCHEF Giveaways on Twitter. (We're launching a
              series of PCHEF Giveaway activities with various communities. If
              you're an influencer, DM us on Twitter.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Airdrop;
