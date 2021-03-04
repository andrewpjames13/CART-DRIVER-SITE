import React from 'react';
import styled from 'styled-components';
import withTheme from 'components/withTheme';
import Button from 'components/Button';
import Logo from 'components/Logo'

const HomeScreen = ({ children, topContent, home, Theme, data }) => {
  const loading = !data || data.loading;
  let hero = null
  if (!loading) {
    [hero] = data.content.filter(item => item.component === 'Hero');
  }

  const H5 = styled.h5`
    text-shadow: 2px 2px 8px ${Theme.black};
  `;

  return (
    <div
      className={`home-container ${home ? 'homePage': ''}`}
      style={{
        color: Theme.white
      }}
    >
      <div className="tiny-100 home-content">
        <Logo fill={Theme.white} />
        <div className="home-bottomContent">
          {!loading &&
            <>
              <H5 className="homeText">
                {hero.slogan}
              </H5>
              <div className="homeInfo">
                {hero.hours && <H5 style={{ margin: '5px 20px' }}>{hero.hours}</H5>}
                {hero.phoneNumber && <H5 style={{ margin: '5px 20px' }}>{hero.phoneNumber}</H5>}
                {hero.address && <H5 style={{ margin: '5px 20px' }}>{hero.address}</H5>}
              </div>
              {children}
              {hero && hero.Buttons && (
                <div className="home-btn-container">
                  {hero.Buttons.map(({ text, href }) => (
                    <Button key={href} href={href}>{text}</Button>
                  ))}
                </div>
              )}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default withTheme(HomeScreen);
