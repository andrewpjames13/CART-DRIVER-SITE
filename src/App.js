import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from 'containers/Home';
import Rino from 'containers/Rino';
import LoHi from 'containers/LoHi';
import NewsletterSignUp from 'components/NewsletterSignUp'
import withTheme from 'components/withTheme';
import useEventListener from 'hooks/useEventListener'


const Menu = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  right: -30vw;
  width: 30vw;
  background-color: ${({ styled }) => styled.theme.white};
  border-left: 6px solid ${({ styled }) => styled.theme.black};
  z-index: 10;
  transition: right 0.25s ease-out;
  ${({ styled }) => styled.open && `
    right: 0;
    -webkit-box-shadow: 1px 0px 18px 5px rgba(0,0,0,0.41);
    box-shadow: 1px 0px 18px 5px rgba(0,0,0,0.41);
  `}
`

const App = ({ Theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => {
    setIsMenuOpen(state => !state)
  }

  const menuRef = useRef()

  const handleClickOff = (event) => {
    if (menuRef.current.contains(event.target)) {
      return;
    }
    if (isMenuOpen) handleClick()
  }

  useEventListener('mousedown', handleClickOff);

  return (
    <>
      {/*<NewsletterSignUp />*/}
      <Switch>
        <Route exact path="/lohi" component={LoHi} />
        <Route exact path="/rino" component={Rino} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Menu styled={{ open: isMenuOpen, theme: Theme }} ref={menuRef}>
        <button
          aria-label="open menu"
          style={{
            fill: Theme.black,
            backgroundColor: Theme.white,
            border: `4px solid ${Theme.black}`,
          }}
          className={`desk-svg-container ${isMenuOpen ? 'open' : ''}`}
          onClick={handleClick}
          >
          <svg className="deskNavHam" x="0px" y="0px" viewBox="0 0 24 24">
            <rect className="rects" y="2" width="24" height="4"/>
            <rect className="rects" y="10" width="24" height="4"/>
            <rect className="rects" y="18" width="24" height="4"/>
          </svg>
          <svg className="deskNavX"x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M24,20.2L15.7,12l8.2-8.3L20.2,0L12,8.3L3.7,0.1L0,3.8L8.3,12l-8.2,8.3L3.8,24l8.2-8.3l8.3,8.2L24,20.2z"/>
          </svg>
        </button>
      </Menu>
    </>
  );
}

export default withTheme(App);
