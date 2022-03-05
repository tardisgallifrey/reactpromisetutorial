import React from 'react';
import PropTypes from 'prop-types';

//Just an aside on use of static in React

export default class Foo extends React.Component {

  //Note there is no constructor here.
  
  // attached to the class definition (or prototype)
  static displayName = 'Foo';
  static propTypes = { bar: PropTypes.string };
  static defaultProps = { bar: 'Bar' };
  
  // attached to each new instance of the class/prototype
  static myState = { hello: 'Hello' };
  
  render() {
    return this.constructor.myState.hello + this.props.bar;
  }
}