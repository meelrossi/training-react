import React, { Component } from 'react';
import notifications from './assets/notifications.svg';
import addbook from './assets/add_book.svg';
import avatar from './assets/avatar.png';

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <img src={notifications} className="user-logo" alt="notifications"/>
        <img src={addbook} className="user-logo" alt="addbook"/>
        <img src={avatar} className="user-logo avatar" alt="avatar"/>
      </div>
    );
  }
}