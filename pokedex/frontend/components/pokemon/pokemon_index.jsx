import React, { Component } from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import {Route} from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends Component {
  componentDidMount() {
   this.props.requestAllPokemon();
  }


  render() {
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />);
    return (
      <section className="pokedex">
      
        <Route  path='/pokemon/:pokemonId' component={ PokemonDetailContainer } />
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
