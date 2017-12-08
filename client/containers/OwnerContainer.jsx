
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import OwnerRes from '../components/OwnerRes'
import OwnerSpaces from '../components/OwnerSpaces'
import Logout from '../components/Logout';
import * as actions from '../actions/actions';


// const mapStateToProps = store => ({
//   totalMarkets: store.markets.totalMarkets,
//   totalCards: store.cards.totalCards
// });

const mapStateToProps = store => ({
  spaces: store.spaceReducer.spaces,
  isAuthenticated: store.auth.isAuthenticated,
});

// const mapDispatchToProps = dispatch => ({
//   addMarket: location => dispatch(actions.addMarket(location)),
//   addCard: id => dispatch(actions.addCard(id)),
//   deleteCard: id => dispatch(actions.deleteCard(id))
// });

const mapDispatchToProps = dispatch => ({
  getSpaces: userId => dispatch(actions.getSpaces(userId)),
  deleteSpace: (spaceId, userId) => dispatch(actions.getSpaces(spaceId, userId)),
  addSpace: userId => dispatch(actions.getSpaces(userId)),
});

const OwnerContainer = (props) => {
  // console.log('this is owner container')
  // console.log(props.spaces)
  console.log('this is id token')
  console.log(localStorage.id_token)
  return (
    <div className='owner-container'>
      {props.username} Container
      <OwnerRes
        reservationList={props.reservationList}
        pending={props.pending}
      />
      <OwnerSpaces
        spaces={props.spaces}
        deleteSpace={props.deleteSpace}
      />
      <Link to={{pathname:'/createspace', state:{id:props._id}}}>Create a Space!</Link>
      {props.isAuthenticated === true && <Logout />}
      {props.isAuthenticated === false && <Redirect to="/" />}
    </div>
  );
}

// add mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer);
