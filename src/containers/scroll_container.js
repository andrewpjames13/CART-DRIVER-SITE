import React, { Component } from 'react';
import { scrollSpy } from 'react-scroll';
import withTheme from 'components/withTheme';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { containerWidth: 90 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), false);
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const innerHeight = window.innerHeight-100;
    let currentLocation = window.pageYOffset || document.documentElement.scrollTop;
    if (currentLocation === 0) {
      this.setState({
        containerWidth: 90
      });
    } else if (currentLocation >= innerHeight) {
      this.setState({
        containerWidth: 100
      });
    } else {
      let percent = (90 + (currentLocation / innerHeight) * 10);
      this.setState({
        containerWidth: percent
      });
    }
  }

  render() {
    return (
      <div className="scroll-container" style={{'width': this.state.containerWidth + '%'}} >
        {this.props.children}
      </div>
    );
  }
};

export default withTheme(ScrollContainer);
