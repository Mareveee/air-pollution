import React, { Component } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MessageContainner from './MessageContainner'
import { Connector } from 'mqtt-react';

class Datas extends Component {

  render() {
    return (
      <Connector mqttProps="ws://161.246.6.159:8083">
      <div className="animated fadeIn">
          <MessageContainner/>
        </div>
      </Connector>
    );
  }
}

export default Datas;
