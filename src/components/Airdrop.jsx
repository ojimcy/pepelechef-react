/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { startCountdown } from '../util/landing';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const api = 'https://g3ek59wvea.execute-api.us-east-1.amazonaws.com/v1';
const url = 'https://pepelechef.fun';

function Airdrop() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

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
      // Save wallet address to localStorage
      localStorage.setItem('walletAddress', formData.walletAddress);
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
    // Check if wallet address exists in localStorage
    const walletAddressFromLocalStorage = localStorage.getItem('walletAddress');
    if (walletAddressFromLocalStorage) {
      // Wallet address exists in localStorage, fetch user data
      fetchUserData(walletAddressFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    startCountdown();
  }, []);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleLoginSubmit = async () => {
    // Check if wallet address exists in localStorage
    const walletAddressFromLocalStorage = localStorage.getItem('walletAddress');
    
    if (!walletAddressFromLocalStorage) {
      // Wallet address not found in localStorage, set it
      localStorage.setItem('walletAddress', walletAddress);
    }
    
    // Fetch user data
    const res = await fetchUserData(walletAddress);
    setShowLoginModal(false);
  };
  

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
              Claim $PCHEF NOW - (10,000 $PCHEF / referral ){' '}
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
                    <span className="errorMsg">
                      Twitter username is required
                    </span>
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
                    <span className="errorMsg">
                      Telegram username is required
                    </span>
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
                  {errors.walletAddress && (
                    <span className="errorMsg">Solana address is required</span>
                  )}
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

              <a href="#" className="mb-1" onClick={handleLogin}>
                Already have an account? Login
              </a>

              <div className="airdrop-info mt-2">
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

          {/* Bootstrap Modal */}
          <Modal show={showLoginModal} onHide={handleCloseModal}>
            <Modal.Body>
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="walletAddress">Wallet Address:</label>
                  <input
                    type="text"
                    id="walletAddress"
                    name="walletAddress"
                    value={walletAddress}
                    onChange={handleWalletAddressChange}
                    required
                    className="form-control"
                  />
                </div>
                <Button className="mt-3" variant="primary" type="submit">
                  Login
                </Button>
              </form>
            </Modal.Body>
          </Modal>

          {/* User data section */}
          {userData && (
            <div className="user-info">
              <h3>User Info</h3>
              <p>
                Wallet Address:
                <span style={{ fontSize: '0.82rem' }}>
                  {' '}
                  {userData.walletAddress}
                </span>{' '}
              </p>
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

          {/* Login Modal */}
          {showLoginModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <h2>Login with Wallet Address</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label htmlFor="walletAddress">Wallet Address:</label>
                    <input
                      type="text"
                      id="walletAddress"
                      name="walletAddress"
                      value={walletAddress}
                      onChange={handleWalletAddressChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Airdrop;
