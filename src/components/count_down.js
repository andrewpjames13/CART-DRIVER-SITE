/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
import moment from 'moment';
import ReactInterval from 'react-interval';

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

  startIt() {
    let hours = moment().format('h');
    let minutes = moment().format('mm');
    let seconds = moment().format('ss');
    let amPm = moment().format('A');
    let displayHour;
    let openCloseTxt;

    if (11 - hours === -1) {
      displayHour = 0;
    } else {
      displayHour = 11 - hours;
    }

    if (amPm === 'PM') {
      openCloseTxt = 'CLOSES IN';
    } else {
      openCloseTxt = 'OPENS IN';
    }

    this.setState({
      hours: displayHour,
      minutes: 60 - minutes,
      seconds: 60 - seconds,
      openCloseTxt
    });
  }

  render() {
    return(
      <div className="countDown">
        <ReactInterval
          timeout={1000}
          enabled={true}
          callback={() => this.startIt()}
         />
        <h6 className="bold open-times clock-letters">{this.state.openCloseTxt}</h6>
        <h6 className="bold clock-numbers open-times">{this.state.hours}</h6>
        <h6 className="bold open-times clock-letters">HR</h6>
        <h6 className="bold clock-numbers open-times">{this.state.minutes}</h6>
        <h6 className="bold open-times clock-letters">MIN</h6>
        <h6 className="bold clock-numbers open-times">{this.state.seconds}</h6>
        <h6 className="bold open-times clock-letters">SEC</h6>
      </div>
    );
  }
}

export default CountDown;
