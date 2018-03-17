import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class App extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
        <div className='App'  style={{width: 1000, height: 500}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ['AIzaSyDQD_oo5zcifW_BQHzeSRHjAT95KRV0bsc'] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    </div>
      // </div>
      

    );
  }
}

export default App;
