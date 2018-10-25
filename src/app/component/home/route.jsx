import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    console.log("Constructor");
  }
  componentWillMount() {
    console.log("Will mount");
  }
  componentDidMount() {
    console.log("Didmount");
  }
  render() {
    return (
      <div className="">
        <span>Home Component</span>
        <img src="http://localhost:9090/assets/images/1.jpeg" />
      </div>
    );
  }
}

export default Home;