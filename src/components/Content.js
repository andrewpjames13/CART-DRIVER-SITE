import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import transformImage from 'helpers/transformImage';
import PhotoGrid from 'components/photo_grid';
import Press from 'components/press';
import About from 'components/about';
import Contact from 'components/contact';
import HeadLine from 'components/head_line';

import Map from 'components/Map';

const DivStyled = styled.div`
  padding: 60px 20px;
  @media all and (min-width: 768px){
    padding: 80px 20px 130px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Content extends PureComponent {
  menuItems = (data, classes = 'menu-item tiny-100') => {
    const Price = styled.h5`
      &:after { color: ${this.props.Theme.black} }
    `;
    const items = data.MenuItems.map(item => (
      <div key={item._uid} className={classes}>
        <div className="tiny-80">
          <h5 style={{ color: this.props.Theme.primary }}>{item.name}</h5>
          <ul style={{ listStyle: 'none' }}>{item.descriptionItems.map(i => <li key={i._uid}>{i.item}</li>)}</ul>
        </div>
        <div className="tiny-20" style={{ color: this.props.Theme.primary }}>
          {item.price && <Price className="item-price">{item.price}</Price>}
        </div>
      </div>
    ))
    return items;
  }

  menu = (data) => {
    return (
      <div className="tiny-100" key={data._uid}>
        <div
          className="menu-section"
          style={{ color: this.props.Theme.black }}
        >
          <HeadLine title={data.Title} />
          {this.menuItems(data)}
          {data.description && <p className="section-description" style={{ color: this.props.Theme.primary }}>{data.description}</p>}
        </div>
      </div>
    );
  }

  renderHappyHourMenu = (data) => {
    return (
      <div
        className="menu-section"
        style={{ color: this.props.Theme.black }}
      >
        <HeadLine title={data.Title} />
        {this.menuItems(data, ' menu-section tiny-100 small-50')}
        <div className="tiny-100">
          {data.description && <p className="section-description" style={{ color: this.props.Theme.primary }}>{data.description}</p>}
          <p className="section-description" style={{ color: this.props.Theme.primary }}>
            {"* These items may be served raw or undercooked based on your specifications or contain raw or undercooked ingredients. Consuming raw or undercooked seafood or shellfish may increase your risk of foodborne illness, especially if you have certain medical conditions."}
          </p>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.data || this.props.data.loading) return null;
    if (this.props.Theme.loading) return null;
    const [howItWorks] = this.props.data.content.filter(item => item.component === 'how it works');
    const [team] = this.props.data.content.filter(item => item.context === 'team' && item.component === 'PhotoGrid');
    const [restaurant] = this.props.data.content.filter(item => item.context === 'restaurant' && item.component === 'PhotoGrid');
    const [menuFour] = this.props.data.content.filter(item => item.context === 'menu-4');
    const [about] = this.props.data.content.filter(item => item.component === 'About');
    const [press] = this.props.data.content.filter(item => item.component === 'Press');
    const [contact] = this.props.data.content.filter(item => item.component === 'Contact');
    const [Tour] = this.props.data.content.filter(item => item.component === '3D Tour');
    const [MapComp] = this.props.data.content.filter(item => item.component === 'Map');
    const [menuLayout] = this.props.data.content.filter(item => item.component === 'Menu Layout')

    return (
      <>
        {howItWorks && howItWorks.text.length > 0 && (
          <DivStyled styled={{ theme: this.props.Theme }}>
            <ReactMarkdown
              className="disc"
              source={howItWorks.text}
              escapeHtml={false}
            />
          </DivStyled>
        )}
        <Element name="menu" className="element">
          {Object.keys(menuLayout).map((key, index) => {
            if (key === 'left' || key === 'right') {
              return  (
                <div key={key} className="tiny-100 small-50">
                  {menuLayout[key].map((data) => {
                    if (data.component === 'Photo') {
                      return (
                        <img
                          alt={data.alt}
                          key={data._uid}
                          className="menu-image tiny-100"
                          style={{ backgroundImage: `url("${transformImage(data.image, '1000x0/filters:quality(100)')}")`}}
                          />
                      )
                    }
                    return this.menu(data)
                  })}
                </div>
              )
            }
            return null
          })}
          <div className="tiny-100">
            {menuFour && this.renderHappyHourMenu(menuFour)}
          </div>
        </Element>
        <Element name="photos" className="element">
          {restaurant && <PhotoGrid {...restaurant} />}
        </Element>
        <Element name="about" className="element about">
          {about && <About data={about} />}
        </Element>
        <Element name="teamPhotos" className="element">
          {team && <PhotoGrid {...team} />}
        </Element>
        <Element name="press" className="element press">
          {press && (
            <Press title={press.title} pressItems={press.pressItems}/>
          )}
        </Element>
        <Element name="contact" className="element contact">
          {contact && <Contact {...contact} />}
          <div className="contact-section">
            <Map
              containerElement={ <div style={{height: '70vh', width: '100%'}} /> }
              mapElement={ <div style={{height: '70vh', width: '100%'}} /> }
              lat={parseFloat(MapComp.latitude)}
              lng={parseFloat(MapComp.longitude)}
              zoom={parseFloat(MapComp.zoom)}
              deliveryRadius={parseFloat(MapComp.deliveryRadius)}
              />
          </div>
          {/*<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ZCLMcjqG3a2Kte_FA28cNgskKrevofCa" width="100%" height="640"></iframe>*/}
          {Tour && Tour.url && (
            <iframe title="Rino Tour" width='100%' height='640' allowFullScreen src={Tour.url}></iframe>
          )}
        </Element>
      </>
    );
  }
};

function mapStateToProps(state) {
  return {
    pressItems: state.pressItems,
    photos: state.photos,
    menuItems: state.menuItems,
    Theme: state.Theme,
  }
}

export default connect(mapStateToProps)(Content);
