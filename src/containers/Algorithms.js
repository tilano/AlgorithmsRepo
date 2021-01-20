import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Algorithms from '../components/Algorithms';
import {getPokemonsDetail as getPokemonsDetailAction} from '../actions/getDetailPokemon';

const mapDispatchToProps = {
  getPokemonsDetail: getPokemonsDetailAction,
};
const mapStateToProps = (state, props) => ({
  detailPokemons: state.detailPokemons,
});

export default reduxForm({form: 'login'})(
  connect(mapStateToProps, mapDispatchToProps)(Algorithms),
);
