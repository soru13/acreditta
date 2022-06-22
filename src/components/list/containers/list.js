import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Waypoint } from 'react-waypoint';
import ListLayout from '../components/listLayout';;
import Loader from '../../loader/loader';
import isLoading from '../../../store/actions/homeAction';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.loadFunc = this.loadFunc.bind(this);
      this.state = {};
    }
    loadFunc(index) {
        const { handleCharacters, count, countList, total, totalList, nameList,tipo, handleCharacterList }  = this.props;
        if (tipo == 'principal') {
            if (total != count) {
                if (index == count) {
                    handleCharacters(nameList,count);
                }
            }
        } else {
            if (totalList != countList) {
                if (index == countList) {
                    handleCharacterList(nameList,countList);
                }
            }
        }
    }
    render() {
        const { list, handleDetalle, tipo, isLoading }  = this.props;
        const itemList = [];
        list.forEach((item,index) => {
            const url = item.get('thumbnail') && `${item.get('thumbnail').get('path')}.${item.get('thumbnail').get('extension')}`;
            const name = item.get('name') ? item.get('name') : item.get('title');
            const ID = item.get('id') ? item.get('id') : '' ;
            const scroll = (index == list.size -2) && <Waypoint onEnter={() => this.loadFunc(list.size)} />;
            if (tipo == 'principal') {
                itemList.push(
                <div className="item" key={index} title={index}>
                        <img src={url} height="35" className="d-inline-block align-top rounded-circle" onClick={handleDetalle} id={ID}/>
                    <span className="nombre">{name}</span>
                </div>,scroll,
                );
            } else {
                itemList.push(
                    <div className="item" key={index} title={index}>
                        <img src={url} height="35" className="d-inline-block align-top rounded-circle" id={ID}/>
                    <span className="nombre">{name}</span>
                </div>,scroll,
                );
            }
          });
        return (
            <ListLayout>
                <Fragment>
                    {itemList}
                    {
                        isLoading &&
                        (
                            <div className='loader'>
                                <Loader />
                            </div>
                        )
                    }
                </Fragment>
            </ListLayout>
        );
    }
}

List.propTypes = {
    list: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.arrayOf(PropTypes.any),
      ]).isRequired,
    handleCharacters: PropTypes.func,
    handleCharacterList: PropTypes.func,
    handleDetalle: PropTypes.func,
    count: PropTypes.number.isRequired,
    countList: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalList: PropTypes.number.isRequired,
    tipo: PropTypes.string.isRequired,
    nameList: PropTypes.string.isRequired,
    _isLoading: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};
List.defaultProps = {
};

const mapStateToProps = (state) => {
    const count = state.get('general').get('count');
    const countList = state.get('general').get('countList');
    const total = state.get('general').get('total');
    const totalList = state.get('general').get('totalList');
    const nameList = state.get('general').get('nameList');
    const isLoading = state.get('isLoading').get('active');
    
    return {
        count,
        total,
        nameList,
        isLoading,
        countList,
        totalList,
    };
  };
  function mapDispatchToProps(dispatch) {
    return {
        _isLoading(value){
            dispatch(isLoading(value))
        },
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(List);
