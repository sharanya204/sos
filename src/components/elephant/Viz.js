
import React, { Component } from 'react';
import { Draw } from '@elephant/ivoryeffects.js'
import draw from './ivoryeffects';

export default class Viz extends Component {
    componentDidMount() {
        draw(this.props)
    }
    render() {
        return (
            <div className="viz" />
        )
    }
}