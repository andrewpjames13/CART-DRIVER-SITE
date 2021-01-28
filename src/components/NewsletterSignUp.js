import React from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components'
import withTheme from 'components/withTheme';

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
const desktop = window.innerWidth > 670
const NewsletterSignUp = ({ Theme, modalIsOpen, setModalOpen }) => {
  const location = useLocation();
  // const [modalIsOpen, setModalOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      minWidth: desktop ? '50vw' : '100vw',
      minHeight: desktop ? '52vh' : '100vh',
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

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <div id="mc_embed_signup" style={{ clear: 'left' }}>
          <form style={{ padding: 0 }} action="https://cart-driver.us8.list-manage.com/subscribe/post?u=c657c922445300faf66bfca99&amp;id=f6f38e1eab" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <Close
              aria-label="close newsletter pop up"
              onClick={() => setModalOpen(false)}
            >
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
            <div className="mc-field-group size1of2" style={{ width: '100%', display: 'flex' }}>
              <div style={{ marginRight: 10 }}>
                <label htmlFor="mce-BIRTHDAY-month">Birth Month</label>
                <div className="datefield">
                  <input className="birthday " type="text" pattern="[0-9]*" placeholder="MM" size="2" maxLength="2" name="mce-BIRTHDAY-month" id="mce-BIRTHDAY-month" style={{ width: 50 }} />
                </div>
              </div>
              <div>
                <label htmlFor="mce-BIRTHDAY-day">Birth Day </label>
                <div className="datefield">
                  <input className="birthday " type="text" pattern="[0-9]*" placeholder="DD" size="2" maxLength="2" name="mce-BIRTHDAY-day" id="mce-BIRTHDAY-day" style={{ width: 50 }} />
                  </div>
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
