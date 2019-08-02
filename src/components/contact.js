import React from 'react';
import styled from 'styled-components';
import withTheme from 'components/withTheme';
import HeadLine from './head_line';

const Contact = props => {
  const Link = styled.a`
    color: ${props.Theme.primary};
    &:hover { color: ${props.Theme.black }}
  `;

  const Svg = styled.svg`
    fill: ${props.Theme.black};
    &:hover { fill: ${props.Theme.primary }}
  `;

  return (
    <div className="contact-section">
      <div className="contact-section--content" style={{ color: props.Theme.black }}>
        <HeadLine title="Contact" noBorder />
        <p>
          <Link href="tel:3032923553">303.292.3553</Link>
          <br/>
          <Link href="mailto:info@cart-driver.com?Subject=I%20Need%20Some%20Info">info@cart-driver.com</Link>
        </p>
        <p>{props.street} <br/> {props.area}</p>
        <p>For all lunch and dinner buyouts, special events, or large groups, please email <Link href="mailto:events@cart-driver.com?Subject=I%20Want%20To%20Party%20At%20Cart-Driver">events@cart-driver.com</Link></p>
        <div className="contact-section--social">
          <a href="https://www.facebook.com/Cart-Driver-Denver-724432647583531/" target="_blank">
            <Svg x="0px" y="0px" viewBox="0 0 512 512">
              <path id="facebook-square-icon" d="M50.5,50v412h412V50H50.5z M324.2,160.7c0,0-22.9,0-32,0c-11.3,0-13.6,4.6-13.6,16.3
              	c0,9.7,0,28.2,0,28.2h45.6l-4.4,49.6h-41.2v148h-59.1V255.4h-30.7v-50.2h30.7c0,0,0-7.2,0-39.5c0-37.1,19.8-56.5,63.8-56.5
              	c7.2,0,40.9,0,40.9,0V160.7z"/>
            </Svg>
          </a>
          <a href="https://www.instagram.com/cart_driver/" target="_blank">
            <Svg x="0px" y="0px" viewBox="0 0 512 512">
              <path id="instagram-square-icon" d="M367.6,150.2V180c0,4.8-3.9,8.6-8.6,8.6h-29.1c-4.8,0-8.6-3.9-8.6-8.6v-29.8
              	c0-4.8,3.9-8.6,8.6-8.6H359C363.8,141.6,367.6,145.4,367.6,150.2z M256,297c21.9,0,39.7-17.8,39.7-39.7c0-21.9-17.8-39.7-39.7-39.7
              	c-21.9,0-39.7,17.8-39.7,39.7C216.3,279.2,234.1,297,256,297z M462,50v412H50V50H462z M392.3,216.9h-79.6
              	c8.1,11.4,12.9,25.3,12.9,40.4c0,38.5-31.2,69.7-69.7,69.7c-38.5,0-69.7-31.2-69.7-69.7c0-15.1,4.8-29,12.9-40.4h-79.3v122.2
              	c0,29.8,24.1,53.9,53.9,53.9h164.7c29.8,0,53.9-24.1,53.9-53.9L392.3,216.9L392.3,216.9z M255.8,311c29.6,0,53.7-24.1,53.7-53.7
              	c0-16.1-7.1-30.5-18.3-40.4c-3.9-3.5-8.4-6.3-13.2-8.5c-6.8-3.1-14.3-4.8-22.2-4.8s-15.4,1.7-22.2,4.8c-4.8,2.2-9.3,5.1-13.2,8.5
              	c-11.2,9.9-18.4,24.3-18.4,40.4C202.1,286.9,226.2,311,255.8,311z M392.3,172.9c0-29.8-24.1-53.9-53.9-53.9H191.1v68H180v-68h-6.4
              	c-0.4,0-0.8,0-1.2,0V187h-11.1v-66.5c-2.7,0.6-5.3,1.4-7.8,2.5V187h-11.1v-58c-13.8,9.8-22.8,25.8-22.8,44v35.4h86.4
              	c12.6-12.8,30.2-20.8,49.7-20.8c19.4,0,37,8,49.7,20.8h86.8L392.3,172.9L392.3,172.9z"/>
            </Svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default withTheme(Contact);

Contact.defaultProps = {
  street: '2500 Larimer St #100',
  area: 'Denver CO 80205',
}
