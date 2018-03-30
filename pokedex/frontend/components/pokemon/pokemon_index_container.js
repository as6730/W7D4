import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selector';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
