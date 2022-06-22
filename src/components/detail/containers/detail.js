import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailLayout from '../components/detailLayout';
import List from '../../list/containers/list';
import isLoading, { getCharacterList, resetListCharacter } from '../../../store/actions/homeAction';

class Detalle extends React.Component {
    constructor(props) {
      super(props);
      this.handleCharacterList = this.handleCharacterList.bind(this);
      this.state = {};
    }

    componentDidMount() {
        const { _isLoading }  = this.props;
        _isLoading(false);
    }
    handleCharacterList(name, offset) {
        const { _getCharacterList, _isLoading, id, _resetListCharacter, origen}  = this.props;
        _isLoading(true);
        if(offset == 0) {
            _resetListCharacter();
        }
        if(origen != 'characters') {
            _getCharacterList(id, name, 0,origen);
        } else {
            _getCharacterList(id, name, offset, origen);
        }
    }
    render() {
        const {
            stories,
            series,
            comics,
            events,
            Description,
            list,
            id,
            origen,
        }  = this.props;

        return (
            <DetailLayout>
                {
                    origen == 'characters' ? (
                    <Fragment>
                        <div>
                            <p>{Description}</p>
                        </div>
                        <div>
                            <button  onClick={() => this.handleCharacterList('stories', 0)} id={id} title='hola' name='stories'>
                                <b>ver listado Stories {stories}</b>
                            </button>
                            <button  onClick={() => this.handleCharacterList('series', 0)} id={id} title='hola' name='series'>
                                <b>ver listado series {series}</b>
                            </button>
                            <button  onClick={() => this.handleCharacterList('comics', 0)} id={id} title='hola' name='comics'>
                                <b>ver listado comics {comics}</b>
                            </button>
                            <button  onClick={() => this.handleCharacterList('events', 0)} id={id} title='hola' name='events'>
                                <b>ver listado events {events}</b>
                            </button>
                        </div>
                        <List list={list} tipo='secundario' handleCharacterList={this.handleCharacterList}/>
                    </Fragment>
                    ) : (
                        <Fragment>
                            <div>
                                <p>{Description}</p>
                                <p>Creadores</p>
                            </div>
                            <div>
                                <button  onClick={() => this.handleCharacterList('characters', 0)} id={id} title='hola' name='characters'>
                                    <b>ver listado de personajes</b>
                                </button>
                            </div>
                            <List list={list} tipo='secundario' handleCharacterList={this.handleCharacterList}/>
                        </Fragment>
                    )
                }
            </DetailLayout>
        );
    }
}

Detalle.propTypes = {
    stories: PropTypes.number,
    series: PropTypes.number,
    comics: PropTypes.number,
    events: PropTypes.number,
    Description: PropTypes.string,
    id: PropTypes.number,
    list: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.arrayOf(PropTypes.any),
      ]),
    isLoading: PropTypes.bool,
    _isLoading: PropTypes.func.isRequired,
    origen: PropTypes.string
};
Detalle.defaultProps = {
    stories: 0,
    series: 0,
    comics: 0,
    events: 0,
    Description: '',
    id: 0,
    list: {},
    origen: '',
};

const mapStateToProps = (state) => {
    const list = state.get('general').get('characterList');
    const origen = state.get('general').get('origen');
    const isLoading = state.get('isLoading').get('active');
    return {
        list,
        isLoading,
        origen,
    };
  };
  function mapDispatchToProps(dispatch) {
    return {
        _getCharacterList(id, name, offset, origen) {
            dispatch(getCharacterList(id, name, offset, origen));
        },
        _isLoading(value){
            dispatch(isLoading(value))
        },
        _resetListCharacter(){
            dispatch(resetListCharacter())
        }
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Detalle);
