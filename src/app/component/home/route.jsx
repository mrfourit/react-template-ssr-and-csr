import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { homeTestRenderServer } from '../../actions/home.actions';

class Home extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    if (!this.props.data && !this.props.isTest) {
      this.props.homeTest(123123123);
    }
  }

  testAction() {
    this.props.homeTest();
  }

  render() {
    return (
      <div className="">
        <span>Home Component</span>
        <img src="http://localhost:9090/assets/images/1.jpeg" />
        <button onClick={this.testAction.bind(this)}>Click</button>
        <Link to="/about">Link About</Link>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isTest: state.homeReducers.isTest,
    data: state.homeReducers.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    homeTest: homeTestRenderServer
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);