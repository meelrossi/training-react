import React, { Component } from 'react';
import book from './assets/default_book.svg';

export default class BookItem extends Component {
  render() {
    return (
      <div className='book'>
        <div className='book-info'>
          <img src={book} alt='book'/>
        </div>
        <p>{this.props.book.name}</p>
        <p>{this.props.book.author}</p>
      </div>
    )
  }
}