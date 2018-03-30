import { connect } from 'react-redux';
import { selectSinglePokemon } from '../../reducers/selector';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {

  const onePokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  return ({
    pokemon: onePokemon
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
