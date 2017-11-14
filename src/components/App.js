import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux'
import AddGoal from './AddGoal'
class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <h3>Goals</h3>
        <AddGoal />
        <div>Goal List</div>
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >Sign out</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {}
}

export default connect(mapStateToProps, null)(App);
