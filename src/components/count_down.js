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
      <div>
        <ReactInterval
          timeout={1000}
          enabled={true}
          callback={() => this.startIt()}
         />
        <h6>{this.state.openCloseTxt}</h6>
        <h1 className="bold clock-numbers">{this.state.hours}</h1>
        <h6 className="clock-letters">HR</h6>
        <h1 className="bold clock-numbers">{this.state.minutes}</h1>
        <h6 className="clock-letters">MIN</h6>
        <h1 className="bold clock-numbers">{this.state.seconds}</h1>
        <h6 className="clock-letters">SEC</h6>
        <h6 className="bold open-times">OPEN 12PM - 12AM SEVEN DAYS A WEEK</h6>
      </div>
    );
  }
}

export default CountDown;
