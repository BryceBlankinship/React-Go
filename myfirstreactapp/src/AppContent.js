import React, {Component} from 'react';
import './index.css';

export default class AppContent extends Component {
    render() {
        return(
            <div className="content-container">
                <h1>{this.props.test}</h1>
                <li>
                    <p>{this.props.subject}</p>
                </li>
                <li>
                    <p>{this.props.author}</p>
                </li>
            </div>
        );
    }
}