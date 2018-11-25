import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Element } from 'react-scroll';
import * as actions from 'actions';
import MenuList from 'components/menu_list';
import PhotoGrid from 'components/photo_grid';
import Press from 'components/press';
import About from 'components/about';
import Contact from 'components/contact';

const photos = [
  { photoSrc: "images/grid/pizza_001-min.jpg" },
  { photoSrc: "images/grid/patio_002-min.jpg" },
  { photoSrc: "images/grid/Seafood_003-min.jpg" },
  { photoSrc: "images/grid/Cocktails_004-min.jpg" },
  { photoSrc: "images/grid/Antipasti_005-min.jpg" },
  { photoSrc: "images/grid/Pizza_006-min.jpg" },
  { photoSrc: "images/grid/Seafood_007-min.jpg" },
  { photoSrc: "images/grid/TableParty_008-min.jpg" },
  { photoSrc: "images/grid/HotSauce_009-min.jpg" },
  { photoSrc: "images/grid/Cart-Driver-Pizza-Restaurant-Denver_010-min.jpg" },
  { photoSrc: "images/grid/FoodSpread_011-min.jpg" },
  { photoSrc: "images/grid/Cart-Driver-Pizza-Restaurant-Denver_012-min.jpg" },
];

const teamPhotos = [
  { photoSrc: "images/team/group_001-min.jpg" },
  { photoSrc: "images/team/party_002-min.jpg" },
  { photoSrc: "images/team/cheers_003-min.jpg" },
  { photoSrc: "images/team/Andrew_Van_Stee_004-min.jpg" },
  { photoSrc: "images/team/cheers_005-min.jpg" },
  { photoSrc: "images/team/head_shot_006-min.jpg" },
  { photoSrc: "images/team/group_007-min.jpg" },
  { photoSrc: "images/team/party_008-min.jpg" },
  { photoSrc: "images/team/head_shot_009-min.jpg" },
  { photoSrc: "images/team/owner_010-min.jpg" },
  { photoSrc: "images/team/party_011-min.jpg" },
  { photoSrc: "images/team/cheers_012-min.jpg" },
];

class Content extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData()
  }

  render() {
    return (
      <Fragment>
        <Element name="home" className="element">
          <div className="home-ph"></div>
        </Element>
        <div className="scroll-body">
          <Element name="contact" className="element contact">
            <Contact
              lat={39.7598124}
              lng={-105.0164476}
              street="2239 W 30th Ave"
              area="Denver, CO 80211"
            />
          </Element>
        </div>
      </Fragment>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData: actions.fetchData }, dispatch)
}

function mapStateToProps(state) {
  return {
    pressItems: state.pressItems,
    photos: state.photos,
    menuItems: state.menuItems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
