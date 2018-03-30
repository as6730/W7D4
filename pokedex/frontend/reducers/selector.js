export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, ownProps) => {
  return Object.values(state.entities.pokemon[ownProps.match.params.id]);
};
