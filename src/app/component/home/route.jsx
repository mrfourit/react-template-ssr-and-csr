import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { homeActions } from '../../actions';

class Home extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    if (!this.props.data && !this.props.isTest) {
      this.props.homeTest(111);
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
    homeTest: homeActions.homeTestRenderServer.bind(homeActions)
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);