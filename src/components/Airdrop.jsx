import React, { useEffect, useState } from 'react';
import { startCountdown } from '../util/landing';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const api = 'https://g3ek59wvea.execute-api.us-east-1.amazonaws.com/v1';
const url = 'http://localhost:3001';

function Airdrop() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState(null);

  const onSubmit = async (formData) => {
    try {
      // Extract referral code from URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const referralCode = urlParams.get('ref');

      // Pass referral code as uplineId in the form data if it exists
      if (referralCode) {
        formData.uplineId = referralCode;
      }

      const res = await axios.post(`${api}/users`, formData);
      // Save wallet address to cookies
      document.cookie = `walletAddress=${formData.walletAddress}; expires=Sun, 23 Mar 2024 12:00:00 UTC; path=/`;
      alert(
        'You have successfully joined the airdrop! Share your referral link to earn rewards.'
      );
      // Fetch user data after successful submission
      fetchUserData(formData.walletAddress);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  const fetchUserData = async (walletAddress) => {
    try {
      const response = await axios.get(
        `${api}/users?walletAddress=${walletAddress}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    // Check if wallet address exists in cookies
    const walletAddressFromCookie = getCookie('walletAddress');
    if (walletAddressFromCookie) {
      // Wallet address exists in cookies, fetch user data
      fetchUserData(walletAddressFromCookie);
    }
  }, []);

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
  };

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
          {userData ? (
            <div className="claim">
              Claim $PCHEF NOW - (50,000 PCHEF / referral ){' '}
            </div>
          ) : (
            <>
              <form
                id="airdrop-form"
                className="col-12 d-sm-block mx-auto"
                onSubmit={handleSubmit(onSubmit)}
                data-lpignore="true"
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="twitterUsername">
                    Twitter Username: Follow{' '}
                    <a
                      href="https://twitter.com/pepelechef_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @pepelechef_
                    </a>{' '}
                    , like and retweet pinned post.
                  </label>
                  <input
                    id="twitterUsername"
                    name="twitterUsername"
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Your Twitter Username"
                    {...register('twitterUsername', { required: true })}
                  />
                  {errors.twitterUsername && (
                    <span>This field is required</span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="telegramUsername">
                    Telegram Username: Join our community on telegram{' '}
                    <a
                      href="https://t.me/PepeLeChef"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PepeLeChef
                    </a>{' '}
                  </label>
                  <input
                    id="telegramUsername"
                    name="telegramUsername"
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Your Telegram username"
                    {...register('telegramUsername', { required: true })}
                  />
                  {errors.telegramUsername && (
                    <span>This field is required</span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="walletAddress">
                    Solana Address:
                  </label>
                  <input
                    id="walletAddress"
                    name="walletAddress"
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Your Solana address"
                    {...register('walletAddress', { required: true })}
                  />
                  {errors.walletAddress && <span>This field is required</span>}
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
                  1. Share your referral link and earn 50,000 PCHEF tokens per
                  referral with no limit!
                </p>
                <p>
                  2. All tasks will be thoroughly verified. Entries with
                  incorrect or incomplete information will be disqualified.
                </p>
                <p>
                  3. Join the PCHEF Giveaways on Twitter! We're hosting exciting
                  giveaway events with different communities. If you're an
                  influencer, reach out to us via DM on Twitter.
                </p>
              </div>
            </>
          )}

          {/* User data section */}
          {userData && (
            <div className="user-info">
              <h3>User Info</h3>
              <p>Wallet Address:
                <span style={{fontSize: "0.82rem"}}> {userData.walletAddress}</span> </p>
              <p>Balance: {userData.balance}</p>
              <p>Referral Count: {userData.referralCount}</p>
              <p>
                Referral Link:{' '}
                <a
                  href={`${url}?ref=${userData.referralCode}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {`${url}?ref=${userData.referralCode}`}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Airdrop;
