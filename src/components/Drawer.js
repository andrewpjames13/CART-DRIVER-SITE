import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-scroll';
import { NavLink as RouterLink } from 'react-router-dom';
import useEventListener from 'hooks/useEventListener'
import Logo from 'components/Logo'
import NewsletterSignUp from 'components/NewsletterSignUp'
import { Route } from 'react-router-dom'
import media from 'helpers/mediaQueries'

const Menu = styled.div`
  padding: 10px 20px;
  position: fixed;
  height: 100%;
  top: 0;
  transition: right 0.25s ease-out;
  right: -75vw;
  width: 75vw;

  ${media.tablet`
    right: -385px;
    width: 385px;

    ${({ styled }) => styled.open && `
      right: 0;
      -webkit-box-shadow: 1px 0px 18px 5px rgba(0,0,0,0.41);
      box-shadow: 1px 0px 18px 5px rgba(0,0,0,0.41);
    `}
  `}

  background-color: ${({ styled }) => styled.theme.white};

  border-left: 6px solid ${({ styled }) => styled.theme.black};
  z-index: 10;

  ${({ styled }) => styled.open && `
    right: 0;
    -webkit-box-shadow: 1px 0px 18px 5px rgba(0,0,0,0.41);
    box-shadow: 1px 0px 18px 5px rgba(0,0,0,0.41);
  `}
`

const clickableStyles = css`
  color: ${({ styled }) => styled.theme.black};
  font-size: 22px;
  font-weight: 700;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: left;
  &:hover { color: ${({ styled }) => styled.theme.primary} }
`
const StyledRouterLink = styled(RouterLink)`
  ${clickableStyles}
`;

const StyledA = styled.a`
  ${clickableStyles}
`;

const StyledButton = styled.button`
  ${clickableStyles}
`;

const StyledLink = styled(Link)`
  ${clickableStyles}
`;

const Clickable = ({ href, target, styled, children, to, ariaLabel, onClick }) => {
  if (onClick) {
    return (
      <StyledButton
        type='button'
        onClick={onClick}
        styled={styled}
        children={children}
        aria-label={ariaLabel}
      />
    )
  }

  if (href) {
    return (
      <StyledA href={href} target={target} styled={styled} children={children} aria-label={ariaLabel} />
    )
  }

  return (
    <StyledRouterLink to={to} styled={styled} children={children} aria-label={ariaLabel} activeStyle={{ color: styled.theme.primary }} exact={true} />
  )
}

const LocationNav = ({ theme }) => (
  <>
    <ul style={{ paddingLeft: 18, paddingBottom: 8, listStyleType: 'none' }}>
      <li>
        <StyledLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          styled={{ theme }}
          >
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          styled={{ theme }}
          >
          Menu
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="photos"
          spy={true}
          smooth={true}
          duration={500}
          styled={{ theme }}
          >
          Photos
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          styled={{ theme }}
          >
          About
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="press"
          spy={true}
          smooth={true}
          duration={500}
          styled={{ theme }}
          >
          Press
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          styled={{ theme }}
          >
          Contact
        </StyledLink>
      </li>
    </ul>
  </>
)

const NavigationLinks = ({ theme, route, data }) => {
  let filteredData = []

  if (data && data.content) {
    filteredData = data.content.filter(item => {
      const href = item[`${route}Href`]
      return href && href.length > 0
    })
  }

  return (
    <>
      {filteredData.map((item) => {
        const href = item[`${route}Href`]
        return (
          <li key={href}>
            <Clickable
              href={href}
              target="_blank"
              styled={{ theme }}
              ariaLabel={`${item.Text} Card Link`}
              >
              {item.Text}
            </Clickable>
          </li>
        )
      })}
    </>
  )
}

const Drawer = ({ theme, data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modalIsOpen, setModalOpen] = useState(false);

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
     <Menu styled={{ open: isMenuOpen, theme }} ref={menuRef}>
       <button
         aria-label="open menu"
         style={{
           fill: theme.black,
           backgroundColor: theme.white,
           border: `4px solid ${theme.black}`,
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
       <RouterLink to="/" aria-label="navigate to home page">
        <Logo fill={theme.black} />
       </RouterLink>
       <h6 style={{ fontSize: 22, fontWeight: 300, paddingLeft: 18, paddingTop: 30 }}>Locations</h6>
       <ul style={{ paddingTop: 12, paddingBottom: 18, paddingLeft: 40, listStyleType: 'none' }}>
         <li>
           <Clickable
             to='/rino'
             styled={{ theme }}
             ariaLabel='go to rino location'
           >
            RINO
           </Clickable>
         </li>
         <Route exact path="/rino">
          <LocationNav theme={theme} />
         </Route>
         <li>
           <Clickable
             to='/lohi'
             styled={{ theme }}
             ariaLabel='go to lohi location'
           >
            LOHI
           </Clickable>
         </li>
         <Route exact path="/lohi">
          <LocationNav theme={theme} />
         </Route>
       </ul>
       <ul style={{ padding: 18, listStyleType: 'none' }}>
         <Route exact path="/lohi">
           <NavigationLinks theme={theme} route='lohi' data={data} />
         </Route>
         <Route exact path="/rino">
           <NavigationLinks theme={theme} route='rino' data={data} />
         </Route>
         <Route exact path="/">
           <NavigationLinks theme={theme} route='home' data={data} />
         </Route>
         <li>
           <Clickable
             onClick={() => setModalOpen(state => !state)}
             styled={{ theme }}
             ariaLabel='open newsletter pop up'
           >
            Subscribe to Newsletter
           </Clickable>
         </li>
       </ul>
     </Menu>
     <NewsletterSignUp modalIsOpen={modalIsOpen} setModalOpen={setModalOpen} />
   </>
  )
}

export default Drawer
