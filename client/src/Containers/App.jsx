import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginContainer from './LoginContainer.jsx';
import Comments from '../Components/Comments.jsx';

//action creators
import * as loginActions from '../actions/loginAPI';
import * as commentActions from '../actions/getComments';

class App extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.getComments();
  }

  render() {
    console.log("fetched:: now chek the store out", this.props.comments);
    return (      
      <div>
        <h1 style={{fontSize: 50}}>Redux Forum</h1>
        <Comments />
      </div>
    )
  }
}

const mapStateToProps = (store) => { 
  return {
    login : store.login,
    comments: store.comments,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, loginActions, commentActions), dispatch); }


export default connect(mapStateToProps, mapDispatchToProps)(App);
