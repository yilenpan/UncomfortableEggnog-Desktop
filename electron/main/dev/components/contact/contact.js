import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

export default class Contact extends React.Component {
  render() {
    const email = {
      color: "#343D5C",
      height: "100vh",
      textAlign: "center",
      marginTop: 200,
      fontFamily: '"Courier New", Courier, monospace'
    };

    return (
        <div style={email}>
         <a href="mailto:UncomfortableEggnog@gmail.com">UncomfortableEggnog@gmail.com</a>
        </div>
    );
  };
}
