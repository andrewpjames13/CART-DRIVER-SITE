import React, { Fragment } from 'react';
import HeadLine from './head_line';

function renderMenuItemsList(obj, happyHourMenu) {
  return Object.keys(obj).map((key, i) => {
    const { name, items, price } = obj[key];
    const classes = happyHourMenu ? 'menu-section tiny-100 small-50' : 'menu-item tiny-100';
    const headline = happyHourMenu ? <Fragment><span className="headerPre">{i === 0 ? 'BEFORE' : 'AFTER'}</span><span>{name}</span></Fragment> : name;

    return (
      <div key={name} className={classes}>
        <div className="tiny-80">
          <h5 className="red">{headline}</h5>
          <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="tiny-20 red">
          {price && <h5 className="item-price">{price}</h5>}
        </div>
      </div>
    );
  });
}

function renderHappyHourMenu(section) {
  return (
      <div key={section.title} className="menu-section">
        <HeadLine title={section.title} />
        <div className="happyHourMenu">
          {renderMenuItemsList(section.menuItems, true)}
        </div>
        <p className="section-description red">{section.sectionDescription}</p>
        <p className="section-description red">
          {"* These items may be served raw or undercooked based on your specifications or contain raw or undercooked ingredients. Consuming raw or undercooked seafood or shellfish may increase your risk of foodborne illness, especially if you have certain medical conditions."}
        </p>
      </div>
  );
}

function renderMenuSections(section) {
  return (
    <div className="menu-section">
      <HeadLine title={section.title} />
      {renderMenuItemsList(section.menuItems)}
      <p className="section-description red">{section.sectionDescription}</p>
    </div>
  );
}

function image(photo) {
  return (
    <div
      className="menu-image"
      style={{ backgroundImage: `url(${photo})`}}
    />
  )
}

const MenuList = ({ menuItems }) => {
  const loading = !menuItems[0];

  return (
    <Fragment>
      <div className="tiny-100 small-50">
        {!loading && renderMenuSections(menuItems[0][0])}
        {image('images/menu/antipasti-menu-min.jpg')}
        {!loading && renderMenuSections(menuItems[0][1])}
      </div>
      <div className="tiny-100 small-50">
        {image('images/menu/pizza-menu-min.jpg')}
        {!loading && renderMenuSections(menuItems[1][0])}
        {image('images/menu/cocktails-menu-min.jpg')}
      </div>
      <div className="tiny-100">
        {!loading && renderHappyHourMenu(menuItems[2][0])}
      </div>
    </Fragment>
  );
}

export default MenuList;
