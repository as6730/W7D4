import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ poke }) =>(
  <li>
    <Link to={`/pokemon/${poke.id}`}>
      {poke.name}
      <img src={poke.imageUrl}/>
    </Link>
  </li>
);
