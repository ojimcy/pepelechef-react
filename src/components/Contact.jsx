import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <a href="https://t.me/PepeLeChef">
              <img
                src="https://static.wixstatic.com/media/1f3f2b_af942b4585dd4bf9baaa6e151c02f1b4~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twttttee2.png"
                alt="Telegram"
                style={{
                  width: '85px',
                  height: '85px',
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                }}
                width="85"
                height="85"
                fetchpriority="high"
              />
            </a>
            <a href="https://twitter.com/pepelechef_">
              <img
                src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twtttt.png"
                alt="twtttt.png"
                style={{
                  width: '85px',
                  height: '85px',
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                }}
                width="85"
                height="85"
                fetchpriority="high"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
