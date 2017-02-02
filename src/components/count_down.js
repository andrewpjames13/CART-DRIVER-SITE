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

    if (amPm === 'PM') {
      this.setState({
        hours: 11 - hours,
        minutes: 60 - minutes,
        seconds: 60 - seconds,
        openCloseTxt: 'CLOSES IN'
      });
    }
    if (amPm === 'AM') {
      this.setState({
        hours: 11 - hours,
        minutes: 60 - minutes,
        seconds: 60 - seconds,
        openCloseTxt: 'OPENS IN'
      });
    }
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
        <h6 className="bold green">OPEN 12PM - 12AM SEVEN DAYS A WEEK</h6>
      </div>
    );
  }
}

export default CountDown;
