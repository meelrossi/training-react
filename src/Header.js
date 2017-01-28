import React, { Component } from 'react';
import logo from './assets/wbooks_logo.svg';
import UserInfo from './UserInfo.js'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="logo" alt="logo"/>
        <UserInfo/>
      </div>
    );
  }
}