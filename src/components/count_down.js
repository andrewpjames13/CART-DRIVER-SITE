/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import ReactInterval from 'react-interval';
import styled from 'styled-components';
import withTheme from 'components/withTheme';

class CountDown extends PureComponent {
  constructor(props) {
    super(props);
    this.startIt = this.startIt.bind(this);

    this.state= {
      hours: 0,
      minutes: 0,
      seconds: 0,
      openCloseTxt: 'CLOSES IN'
    };
  }

  componentWillMount() {
    this.startIt();
  }

  startIt(now = new Date()) {
    const currentHour = now.getHours();
    const newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), currentHour >= 12 ? 24 : 12);
    const distance = newDate - now;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    this.setState({
      hours,
      minutes,
      seconds,
      openCloseTxt: currentHour >= 12 ? 'CLOSES IN' : 'OPENS IN',
    });
  }

  render() {
    const H6 = styled.h6`
      text-shadow: 2px 2px 8px ${this.props.Theme.black};
    `;

    return(
      <div className="countDown">
        <ReactInterval
          timeout={1000}
          enabled={true}
          callback={() => this.startIt()}
         />
        <H6 className="bold open-times clock-letters">{this.state.openCloseTxt}</H6>
        <H6 className="bold clock-numbers open-times">{this.state.hours}</H6>
        <H6 className="bold open-times clock-letters">HR</H6>
        <H6 className="bold clock-numbers open-times">{this.state.minutes}</H6>
        <H6 className="bold open-times clock-letters">MIN</H6>
        <H6 className="bold clock-numbers open-times">{this.state.seconds}</H6>
        <H6 className="bold open-times clock-letters">SEC</H6>
      </div>
    );
  }
}

export default withTheme(CountDown);
