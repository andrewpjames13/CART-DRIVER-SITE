import React, { Fragment } from 'react';
import HeadLine from './head_line';

function renderMenuItemsList(obj, happyHourMenu) {
  return Object.keys(obj).map((key) => {
    const { name, items, price } = obj[key];
    const classes = happyHourMenu ? 'menu-section tiny-100 small-50' : 'menu-item tiny-100';
    return (
      <div key={name} className={classes}>
        <div className="tiny-80">
          <h5 className="red">{name}</h5>
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

const MenuList = ({ menuItems }) => {
  if (!menuItems[0]) return null;
  const anti = menuItems[0][0]
  const pizza = menuItems[0][1]
  const drink = menuItems[1][0]
  const happy = menuItems[2][0]

  return (
    <Fragment>
      <div className="tiny-100 small-50">
        {renderMenuSections(anti)}
        <img className="menu-image" src="images/cart-driver-oysters.jpg" alt="oysters" />
        {renderMenuSections(pizza)}
      </div>
      <div className="tiny-100 small-50">
        <img className="menu-image" src="images/cart-driver-oysters.jpg" alt="oysters" />
        {renderMenuSections(drink)}
        <img className="menu-image" src="images/cart-driver-oysters.jpg" alt="oysters" />
      </div>
      <div className="tiny-100">
        {renderHappyHourMenu(happy)}
      </div>
    </Fragment>
  );
}

export default MenuList;
