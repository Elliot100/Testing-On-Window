import React, { Component } from 'react';
import {testMe} from './utility';

class TestIndex extends React.Component {

    render() {
        return (
            <div>
                <h1>Here is the test: </h1>
                <p>{testMe('students')}</p>
            </div>
        );
    }
}

export default TestIndex;