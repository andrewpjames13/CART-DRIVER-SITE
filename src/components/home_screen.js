import React from 'react';
import CountDown from './count_down';

const HomeScreen = () => {
  return (
    <div className="home-container" style={{ backgroundImage: 'url(images/cart-driver-table-party.jpg)'}}>
      <div className="home-radial-grad" />
      <div className="tiny-100 home-content">
        <CountDown />
        <h6 className="bold open-times">OPEN 12PM - 12AM SEVEN DAYS A WEEK</h6>
        <svg viewBox="0 0 370 76"><path d="M179.66,19.23H175V57.52h4.63c5.43,0,7.31-3.91,7.31-9V28.28C187,23.21,185.09,19.23,179.66,19.23Zm5.8,29.32c0,6.69-3.31,7.47-5.8,7.47h-3.12V20.74h3.12c1.44,0,5.8,0,5.8,7.54Z"/><path d="M180.16,16h-8.4V60.78h8.4c7.46,0,10.06-5.07,10.06-11.87v-21C190.23,21.25,187.55,16,180.16,16ZM189,48.54c0,6.23-2.46,11-9.34,11H173V17.27h6.66c6.88,0,9.34,4.78,9.34,11Z"/><path d="M180.16,12.51H168.23V64.31h11.93c8.77,0,13.6-5.47,13.6-15.41v-21C193.76,18.12,188.81,12.51,180.16,12.51Zm12.09,36.4c0,7.89-3.19,13.9-12.09,13.9H169.74V14h10.42c8.83,0,12.09,6.08,12.09,13.9Z"/><path d="M229.16,27.7c0-7.07-1.48-15.19-13-15.19H204.21V64.31h8.3V42.74H216c3.59,0,4.57,1,4.57,4.86V64.31h8.3V47.39c0-2.24-.36-6.14-2.54-9C228.21,35.89,229.16,32.3,229.16,27.7Zm-1.8,19.69V62.8h-5.28V47.6c0-4.49-1.52-6.37-6.08-6.37h-5V62.8h-5.28V14h10.42c9.34,0,11.51,5.57,11.51,13.68,0,3.69-.65,8-3.33,10.71C226.57,40.51,227.36,44.13,227.36,47.39Z"/><path  d="M215.85,19.3H211V35.88h4.2c5.72,0,7.09-2.68,7.09-8.18C222.3,22.7,221.28,19.3,215.85,19.3Zm-.65,15.07h-2.69V20.81h3.34c3.78,0,4.94,1.61,4.94,6.89S219.59,34.37,215.2,34.37Z"/><path d="M220.12,38.56c4.78-1.45,5.5-6.51,5.5-10.86,0-6.88-1.81-11.73-9.48-11.73h-8.47V60.78H209V39.21H216c6.08,0,8,2.53,8,8.4V60.78h1.38V47.39C225.41,43.55,224.47,39.57,220.12,38.56Zm-4.92-.65H209V17.35h6.8c7.09,0,8.47,4.2,8.47,10.35C224.32,34.57,222.51,37.9,215.2,37.9Z"/><rect x="243.15" y="15.97" width="1.38" height="44.81"/><path d="M239.68,12.51V64.31H248V12.51Zm6.79,50.3h-5.28V14h5.28Z"/><path d="M279.8,12.44l-6.63,29.47-6.82-29.47h-8.6l12.07,51.81h6.67l11.84-51.81Zm-4.51,50.3H271L259.65,13.94h5.5l8,34.75L281,13.94h5.43Z"/><polygon points="282.6 15.97 273.19 57.67 263.56 15.97 262.19 15.97 272.61 60.78 273.69 60.78 283.97 15.97 282.6 15.97"/><polygon points="316.87 17.27 316.87 15.97 301.31 15.97 301.38 60.78 316.87 60.78 316.87 59.55 302.61 59.55 302.61 39.13 312.17 39.13 312.17 37.9 302.61 37.9 302.61 17.27 316.87 17.27"/><path d="M320.41,20.74V12.51H297.84l.08,51.81h22.49V56H306.07V42.67h9.55v-8.3h-9.55V20.74Zm-6.29,15.14v5.28h-9.56V57.52H318.9V62.8H299.43L299.35,14H318.9v5.21H304.57V35.88Z"/><path d="M345.9,38.56c4.78-1.45,5.5-6.51,5.5-10.86,0-6.88-1.81-11.73-9.48-11.73h-8.47V60.78h1.38V39.21h6.95c6.08,0,8,2.53,8,8.4V60.78h1.38V47.39C351.19,43.55,350.24,39.57,345.9,38.56ZM341,37.9h-6.15V17.35h6.8c7.09,0,8.47,4.2,8.47,10.35C350.1,34.57,348.29,37.9,341,37.9Z"/><path d="M341.63,19.3h-4.85V35.88H341c5.72,0,7.09-2.68,7.09-8.18C348.07,22.7,347.06,19.3,341.63,19.3ZM341,34.37h-2.69V20.81h3.34c3.78,0,4.93,1.61,4.93,6.89S345.36,34.37,341,34.37Z"/><path d="M354.94,27.7c0-7.07-1.48-15.19-13-15.19H330V64.31h8.3V42.74h3.49c3.59,0,4.57,1,4.57,4.86V64.31h8.3V47.39c0-2.24-.36-6.14-2.54-9C354,35.89,354.94,32.3,354.94,27.7Zm-1.8,19.69V62.8h-5.28V47.6c0-4.49-1.52-6.37-6.08-6.37h-5V62.8H331.5V14h10.42c9.34,0,11.51,5.57,11.51,13.68,0,3.69-.65,8-3.33,10.71C352.34,40.51,353.14,44.13,353.14,47.39Z"/><path d="M41.83,32.65V31.14c0-11.2-2.28-18.66-13.38-18.66-8.51,0-13.6,5.68-13.6,15.19V50c0,9.51,5.06,15.19,13.52,15.19,12.41,0,13.45-9.63,13.45-18.67V45.05H33.46v1.51c0,7.8-1.28,10.44-5.08,10.44-4.48,0-5.15-4.36-5.15-7V27.67c0-2.07.51-6.89,5.22-6.89,4.28,0,5,3.2,5,10.36v1.51ZM28.45,19.27c-4.78,0-6.73,3.91-6.73,8.4V50c0,4.49,1.88,8.47,6.66,8.47,5.72,0,6.59-5.14,6.59-11.95h5.36c0,9.12-1.09,17.16-11.94,17.16-8.4,0-12-5.94-12-13.68V27.67C16.36,19.92,20.05,14,28.45,14c9.7,0,11.87,5.94,11.87,17.16H35C35,25.14,34.68,19.27,28.45,19.27Z"/><path d="M38.29,29.12c0-8-2.75-13.1-9.84-13.1S18.39,21.08,18.39,27.67V50c0,6.59,3,11.73,10,11.73,8.18,0,9.92-6.23,9.92-13.17H37c0,5.94-1.3,11.87-8.61,11.87-6.15,0-8.69-4.92-8.69-10.42V27.67c0-5.5,2.61-10.42,8.76-10.42,7.31,0,8.54,5.86,8.54,11.87Z"/><path d="M58.36,44.06h6.95L61.83,28.57Zm1.88-1.51,1.59-7.09,1.59,7.09Z"/><path d="M65.13,13H58.53L46.69,64.76h8.52l3.26-14h6.85l3,14h8.53Zm1.4,36.33H57.27L54,63.25H48.58L59.73,14.46h4.2L75,63.25H69.58Z"/><path d="M62.34,16.41h-1L51,61.22h1.37l3.11-13.9h12.6l3.11,13.9h1.3ZM55.82,46l6-26.28,6,26.28Z"/><path d="M108.69,28.14c0-7.07-1.48-15.19-13-15.19H83.74V64.76H92V43.18h3.49c3.59,0,4.57,1,4.57,4.86V64.76h8.3V47.83c0-2.24-.36-6.14-2.54-9C107.74,36.33,108.69,32.74,108.69,28.14Zm-1.8,19.69V63.25h-5.28V48c0-4.49-1.52-6.37-6.08-6.37h-5V63.25H85.25V14.46H95.67c9.34,0,11.51,5.57,11.51,13.68,0,3.69-.65,8-3.33,10.71C106.09,41,106.89,44.57,106.89,47.83Z"/><path d="M95.38,19.74H90.53V36.32h4.2c5.72,0,7.09-2.68,7.09-8.18C101.82,23.14,100.81,19.74,95.38,19.74Zm-.65,15.07H92V21.25h3.34c3.78,0,4.93,1.61,4.93,6.89S99.11,34.81,94.73,34.81Z"/><path d="M99.65,39c4.78-1.45,5.5-6.51,5.5-10.86,0-6.88-1.81-11.73-9.48-11.73H87.2V61.22h1.38V39.65h6.95c6.08,0,8,2.53,8,8.4V61.22h1.38V47.83C104.94,44,104,40,99.65,39Zm-4.92-.65H88.58V17.79h6.8c7.09,0,8.47,4.2,8.47,10.35C103.85,35,102,38.35,94.73,38.35Z"/><path d="M114.8,13v8.3h8.11v43.5h8.3V21.25h8.11V13Zm23,6.79H129.7v43.5h-5.28V19.74h-8.11V14.46h21.5Z"/><polygon points="126.37 61.29 127.74 61.29 127.74 17.79 135.85 17.79 135.85 16.49 118.33 16.49 118.33 17.79 126.37 17.79 126.37 61.29"/><path d="M162.52,42H141.14l-1-1V35.75l1-1h21.38l1,1V41Zm-20.83-1.32H162l.27-.27V36.3L162,36H141.69l-.27.27v4.15Z"/><rect x="143.81" y="37.71" width="16.03" height="1.32"/></svg>
        <h5 className="homeText">RiNo's home for sharing wood-fired pizzas, fresh oysters, seasonal market plates, cocktails, and conversation.</h5>
      </div>
    </div>
  );
};

export default HomeScreen;
