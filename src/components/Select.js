import React from 'react'
import { scroller } from 'react-scroll';
import Sticky from 'react-stickynode';
import withTheme from 'components/withTheme';
import styled from 'styled-components';

const Container = styled.div`
  height: 75px;
  padding: 15px;
`

const StyledSelect = styled.select`
  ${({ theme }) => `
    cursor: pointer;
    width: calc(100% - 65px);
    @media all and (min-width: 768px){
      width: 300px;
    }
    height: 46px;
    padding: 0 10px;
    background-color: ${theme.white};
    border: 4px solid ${theme.black};
    font-size: 20px;
    font-weight: 600;
  `}
`

const Select = ({ children, onChange, Theme }) => {
  const handleOnChange = (e) => {
    console.log(e.target.value)
    scroller.scrollTo('to-take-home', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -50,
    })
  }

  return (
    <>
      <Sticky enabled={true} top={0} activeClass='activeDropShadow' bottomBoundary='#menu'>
        <Container style={{ backgroundColor: Theme.white }}>
          <StyledSelect onChange={handleOnChange} theme={Theme}>
            <option value="">Jump to a menu</option>
            {children}
          </StyledSelect>
        </Container>
      </Sticky>
    </>
  )
}

export default withTheme(Select)
