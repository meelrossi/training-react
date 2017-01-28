import React, { Component } from 'react';
import search from './assets/search.svg';

export default class FiltersForm extends Component {
  render() {
    return (
      <div className='filters-wrapper container'>
      	<div className='input-wrapper'>
	      	<select className='filter-select'>
	      		<option disabled selected value>Seleccionar filtro</option>
	      		<option value='name'>Nombre</option>
	      		<option value='author'>Autor</option>
	      	</select>
        </div>
  	    <div className='input-wrapper'>
  	      <input type="text" placeholder='Buscar...'/>
  	    </div>
        <div className='search-button'>
          <img src={search} alt='search'/>
        </div>
      </div>
    );
  }
}