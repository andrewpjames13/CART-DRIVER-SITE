import React, { useEffect, useState } from 'react'
import { scroller } from 'react-scroll';
import Sticky from 'react-stickynode';
import withTheme from 'components/withTheme';
import styled from 'styled-components';
import { jumpFormatter } from './Content'

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

const Select = ({ onChange, Theme, data }) => {
  const [food, setFood] = useState([])
  const [drink, setDrink] = useState([])
  const handleOnChange = (e) => {
    scroller.scrollTo(jumpFormatter(e.target.value), {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -50,
    })
  }


  useEffect(() => {
    data.left.forEach(dat => {
      if (dat.menuSelect && dat.menuSelect === 'food') {
        setFood(state => [...state, dat.Title])
      }
      if (dat.menuSelect && dat.menuSelect === 'drink') {
        setDrink(state => [...state, dat.Title])
      }
    })
    data.right.forEach(dat => {
      if (dat.menuSelect && dat.menuSelect === 'food') {
        setFood(state => [...state, dat.Title])
      }
      if (dat.menuSelect && dat.menuSelect === 'drink') {
        setDrink(state => [...state, dat.Title])
      }
    })
  }, [data.left.length, data.right.length])

  return (
    <Sticky enabled={true} top={0} activeClass='activeDropShadow' bottomBoundary='#menu'>
      <Container style={{ backgroundColor: Theme.white }}>
        <StyledSelect onChange={handleOnChange} theme={Theme}>
          <option value="">Jump to a menu</option>
          {drink.length > 0 && (
            <optgroup label="Drink">
              {drink.map(d => (
                <option key={`${d}-drink`}>{d}</option>
              ))}
            </optgroup>
          )}
          {food.length > 0 && (
            <optgroup label="Food">
              {food.map(d => (
                <option key={`${d}-food`}>{d}</option>
              ))}
            </optgroup>
          )}
        </StyledSelect>
      </Container>
    </Sticky>
  )
}

export default withTheme(Select)
