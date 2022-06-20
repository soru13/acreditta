import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeLayout from '../components/homeLayout';
import { closeModal, openModal } from '../../store/actions/generalsAction';
import List from '../../components/list/containers/list';
import ModalContainer from '../../components/modal/containers/modal';
import Modal from '../../components/modal/components/modal';
import saveInput from '../../store/actions/generalsAction';
import isLoading, { getCharacters, getCharacter, reset } from '../../store/actions/homeAction';
import Detalle from '../../components/detail/containers/detail';
import Search from '../../components/inputs/search/search';
import Filter from '../../components/filter/containers/filter';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
    this.handleDetalle = this.handleDetalle.bind(this);
    this.handleCharacters = this.handleCharacters.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }
  handleCloseModal() {
    const { _closeModal } = this.props;
    _closeModal();
  }
  handleChange(event) {
    const { _saveInput } = this.props;
    _saveInput(event.target.name, event.target.value);
  }
  componentDidMount() {
    const { _getCharacters } = this.props;
    _getCharacters('characters',0,'characters');
  }
  handleDetalle(event) {
    const { _getCharacter, _isLoading } = this.props;
    _isLoading(true);
    _getCharacter(event.target.id,);
  }
  handleCharacters(name, offset) {
    const { _getCharacters, _isLoading} = this.props;
    _isLoading(true);
   _getCharacters(name,offset);
  }
  handleEventClick(name) {
    const { _getCharacters, _isLoading, _reset} = this.props;
    _isLoading(true);
    _reset();
    debugger;
   _getCharacters(name,0,name);
  }
  render() {
    const { modal, list, character, search } = this.props;
    const titulo = character ? character.get('name') : '';
    const thumbnail = character.get('thumbnail') && `${character.get('thumbnail').get('path')}.${character.get('thumbnail').get('extension')}`;
      return (
        <HomeLayout>
            <Fragment>
                <Search handleChange={this.handleChange} val={search}/>
                <Filter handleEventClick={this.handleEventClick}/>
                {
                    !modal.get('visibility') &&
                    <List list={list} handleDetalle={this.handleDetalle} handleCharacters={this.handleCharacters} tipo='principal'/>
                }
                {
                    modal.get('visibility') &&
                    <ModalContainer>
                    <Modal
                        handleClick={this.handleCloseModal}
                        action={modal.get('action')}
                        title= {titulo}
                        url= {thumbnail}
                    >
                        <Detalle
                            stories={character.get('stories') && character.get('stories').get('available')}
                            storiesURL={character.get('stories') && character.get('stories').get('collectionURI')}
                            series={character.get('series') && character.get('series').get('available')}
                            seriesURL={character.get('series') && character.get('series').get('collectionURI')}
                            comics={character.get('comics') && character.get('comics').get('available')}
                            comicsURL={character.get('comics') && character.get('comics').get('collectionURI')}
                            events={character.get('events') && character.get('events').get('available')}
                            eventsURL={character.get('events') && character.get('events').get('collectionURI')}
                            Description={character.get('description')}
                            id={character.get('id') && character.get('id')}
                        />
                    </Modal>
                    </ModalContainer>
                }
            </Fragment>
        </HomeLayout>
      );
  }
}


Home.propTypes = {
  _closeModal: PropTypes.func.isRequired,
  _openModal: PropTypes.func.isRequired,
  _getCharacters: PropTypes.func.isRequired,
  _saveInput: PropTypes.func.isRequired,
  _isLoading: PropTypes.func.isRequired,
  _reset: PropTypes.func.isLoading,
  list: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  isLoading: PropTypes.bool,
  character: PropTypes.object,
  search: PropTypes.string,
};
Home.defaultProps = {
  character: {},
  search: '',
};
const mapStateToProps = (state) => {
  const modal = state.get('modal');
  let list = state.get('general').get('list');
  const isLoading = state.get('isLoading').get('active');
  const character = state.get('general').get('character');
  const origen = state.get('general').get('origen');
  const search = state.get('general') &&  state.get('general').get('inputs').get('search');
  if (search) {
    list = list.filter((item) => {
        if(origen == 'characters'){
            return item.get('name').toLowerCase().includes(search.toLowerCase());
        }else{
            return item.get('title').toLowerCase().includes(search.toLowerCase());
        }
    }).toList();
  };
  return {
    modal,
    list,
    isLoading,
    character,
    search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _getCharacters(name,offset, origen) {
        dispatch(getCharacters(name, offset, origen));
    },
    _closeModal() {
      dispatch(closeModal());
    },
    _openModal(type) {
      dispatch(openModal(type));
    },
    _saveInput(name, value) {
      dispatch(saveInput(name, value));
    },
    _isLoading(value){
        dispatch(isLoading(value))
    },
    _getCharacter(id) {
        dispatch(getCharacter(id));
    },
    _reset(){
        dispatch(reset());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
