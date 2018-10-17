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
      <div className="">Home Component</div>
    );
  }
}

export default Home;