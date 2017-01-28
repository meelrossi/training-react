import React, { Component } from 'react';
import FiltersForm from './FiltersForm.js';
import Books from './Books.js';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <FiltersForm/>
        <Books/>
      </div>
    );
  }
}