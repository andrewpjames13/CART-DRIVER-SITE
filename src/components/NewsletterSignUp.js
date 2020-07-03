import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components'
import withTheme from 'components/withTheme';

const NewsLetterButton = styled.button`
  z-index: 2;
  position: fixed;
  top: 16px;
  right: 16px;
  width: 65px;
  height: 45px;
  display: flex;
  justify-content: center;

  @media all and (min-width: 768px){
    right: 75px;
  }
`

const Close = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 20px;
`

const Ul = styled.ul`
  listStyle: none;
  display: flex;

  @media all and (min-width: 768px){
    display: block;
  }
`

const Body = styled.p`
  font-size: 13px;
  @media all and (min-width: 768px){
    font-size: 16px
  }
`

const Header = styled.h2`
  font-size: 10px;
  @media all and (min-width: 768px){
    font-size: 25px
  }
`

const NewsletterSignUp = ({ Theme }) => {
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(window.innerHeight)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      minWidth: '300px',
      minHeight: window.innerHeight > 670 ? '610px' : '90vh',
      backgroundColor: '#f4f3ed',
      padding: '0 20px'
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,.5)',
      zIndex: '1000',
    }
  };

  const checkTheBox = (type, id) => {
    if (location.pathname.includes(type)) {
      document.getElementById(id).checked = true;
    }
  }

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <NewsLetterButton
        style={{
          fill: Theme.black,
          backgroundColor: Theme.white,
          border: `4px solid ${Theme.black}`,
        }}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512,203.1h0a6.2,6.2,0,0,0-.1-1.3v-.3c0-.3-.1-.7-.1-1a.4.4,0,0,1-.1-.3l-.3-1.2h0c-.1-.4-.3-.8-.4-1.2s-.1-.3-.2-.4l-.3-.8-.3-.4a3,3,0,0,0-.6-1.1l-.2-.3-.5-.7-.3-.4-.9-.9h0l-1-.9h-.1L481,170.2V105a35,35,0,0,0-35-35H360.2L291.1,12.7a54.9,54.9,0,0,0-70.2,0L151.8,70H66a35,35,0,0,0-35,35v65.2L5.4,191.5H5.3l-1,.9h0l-.9.9-.3.4-.5.7-.2.3a3,3,0,0,0-.6,1.1l-.3.4-.3.8c-.1.1-.1.3-.2.4l-.4,1.2h0l-.3,1.2a.4.4,0,0,1-.1.3c0,.3-.1.7-.1,1v.3A6.2,6.2,0,0,0,0,203H0V457a54.7,54.7,0,0,0,17.2,39.9l1,.9A54.6,54.6,0,0,0,55,512H457a54.6,54.6,0,0,0,36.8-14.2,3.8,3.8,0,0,0,.9-.9A54.4,54.4,0,0,0,512,457V203.1ZM66,100H446a5,5,0,0,1,5,5V221.7l-8.5,7L272,370.3a25.2,25.2,0,0,1-32,0L69.5,228.7l-8.5-7V105A5,5,0,0,1,66,100ZM30,457V235l6.5,5.3h0L182.9,361.9,31.5,465.6A24.7,24.7,0,0,1,30,457Zm176.9-75.2,14,11.6a55.2,55.2,0,0,0,70.2,0l14-11.6L451.3,482H60.7Zm122.2-19.9L475.5,240.3h0L482,235V457a24.7,24.7,0,0,1-1.5,8.6ZM240,35.8a25.1,25.1,0,0,1,32,0L313.2,70H198.8Z" transform="translate(0 0)"/><path d="M131.5,165a15,15,0,0,0,15,15h142a15,15,0,0,0,0-30h-142A15,15,0,0,0,131.5,165Z" transform="translate(0 0)"/><path d="M146.5,240h219a15,15,0,0,0,0-30h-219a15,15,0,0,0,0,30Z" transform="translate(0 0)"/></svg>
      </NewsLetterButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <div id="mc_embed_signup" style={{ clear: 'left' }}>
          <form style={{ padding: 0 }} action="https://cart-driver.us8.list-manage.com/subscribe/post?u=c657c922445300faf66bfca99&amp;id=f6f38e1eab" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <Close onClick={() => setIsOpen(false)}>
              <svg style={{ width: '20px' }} x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M24,20.2L15.7,12l8.2-8.3L20.2,0L12,8.3L3.7,0.1L0,3.8L8.3,12l-8.2,8.3L3.8,24l8.2-8.3l8.3,8.2L24,20.2z"/>
              </svg>
            </Close>
            <div id="mc_embed_signup_scroll">
             <Header>Subscribe to our newsletter</Header>
             <Body>We'll keep you posted on Cart-Driver news, menus, recipes, parties, and more!</Body>
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
            <div className="mc-field-group size1of2" style={{ width: '100%' }}>
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
                <Ul>
                  <li style={{ marginRight: '10px' }}><input ref={() => { checkTheBox('lohi', 'mce-group[292661]-292661-0') }} type="checkbox" value="1" name="group[292661][1]" id="mce-group[292661]-292661-0"/><label htmlFor="mce-group[292661]-292661-0">LoHi</label></li>
                  <li style={{ marginRight: '10px' }}><input ref={() => { checkTheBox('rino', 'mce-group[292661]-292661-1') }} type="checkbox" value="2" name="group[292661][2]" id="mce-group[292661]-292661-1"/><label htmlFor="mce-group[292661]-292661-1">RiNo</label></li>
                </Ul>
            </div>
            {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_c657c922445300faf66bfca99_f6f38e1eab" tabIndex="-1"/></div>
            <div className="clear">
              <button type="submit" value="Subscribe" name="subscribe" className="btn" style={{ width: '100%' }}>Subscribe</button>
            </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default withTheme(NewsletterSignUp);
