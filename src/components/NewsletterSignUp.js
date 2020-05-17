import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';

const NewsletterSignUp = () => {
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      minWidth: '300px',
      minHeight: '640px',
      backgroundColor: '#f4f3ed',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,.75)',
      zIndex: '1000',
    }
  };

  const checkTheBox = (type, id) => {
    if (location.pathname.includes(type)) {
      document.getElementById(id).checked = true;
    }
  }

  return (
    <>
      <button className="btn" onClick={() => setIsOpen(true)} style={{ marginTop: 10 }}>Signup for our newsletter</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <div id="mc_embed_signup" style={{ clear: 'left' }}>
          <form action="https://cart-driver.us8.list-manage.com/subscribe/post?u=c657c922445300faf66bfca99&amp;id=f6f38e1eab" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
             <h2>Subscribe to our newsletter</h2>
             <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" name="FNAME" className="" id="mce-FNAME"/>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" name="LNAME" className="" id="mce-LNAME"/>
            </div>
            <div className="mc-field-group size1of2">
              <label htmlFor="mce-BIRTHDAY-month">Birthday </label>
              <div className="datefield">
                <span className="subfield monthfield"><input className="birthday " type="text" pattern="[0-9]*" placeholder="MM" size="2" maxLength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" style={{ width: 50 }} /></span> /
                <span className="subfield dayfield"><input className="birthday " type="text" pattern="[0-9]*" placeholder="DD" size="2" maxLength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" style={{ width: 50 }} /></span>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div className="mc-field-group input-group">
                <strong>Locations </strong>
                <ul>
                  <li><input ref={() => { checkTheBox('lohi', 'mce-group[292661]-292661-0') }} type="checkbox" value="1" name="group[292661][1]" id="mce-group[292661]-292661-0"/><label htmlFor="mce-group[292661]-292661-0">LoHi</label></li>
                  <li><input ref={() => { checkTheBox('rino', 'mce-group[292661]-292661-1') }} type="checkbox" value="2" name="group[292661][2]" id="mce-group[292661]-292661-1"/><label htmlFor="mce-group[292661]-292661-1">RiNo</label></li>
                </ul>
            </div>
            {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_c657c922445300faf66bfca99_f6f38e1eab" tabIndex="-1"/></div>
            <div className="clear">
              <button type="submit" value="Subscribe" name="subscribe" className="btn">Subscribe</button>
            </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default NewsletterSignUp;
