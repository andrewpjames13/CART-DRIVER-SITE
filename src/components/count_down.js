/*jshint esversion: 6 */
import React, { PureComponent } from 'react';
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

  startIt(now = new Date()) {
    const currentHour = now.getHours();
    const newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), currentHour > 12 ? 24 : 0);
    const distance = newDate - now;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    this.setState({
      hours,
      minutes,
      seconds,
      openCloseTxt: currentHour > 12 ? 'CLOSES IN' : 'OPENS IN',
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
