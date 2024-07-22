import React, { Component } from 'react';


class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has been added to the DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is being removed from the DOM');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>This is Class componant life cycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default MyClassComponent;
