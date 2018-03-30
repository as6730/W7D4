import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class PokemonDetail extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(props) {
   this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    const { pokemon } = this.props;
    let moves;

    if(Array.isArray(pokemon.moves)) {
      moves = <li>{pokemon.moves.join(', ')}</li>;
    }

    console.log(pokemon.moves);
    return (
      <section>
        <figure>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
        </figure>
        <ul>
          <li>
            <h2>{pokemon.name}</h2>
          </li>
          // not anticipating that we have fetched our pokemon
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          {moves}
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
