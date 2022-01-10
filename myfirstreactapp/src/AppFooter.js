import React, {Component, Fragment} from 'react';
import './index.css';

export default class AppFooter extends Component {
    render(){
        const currentYear = new Date().getFullYear();
        return (
            <Fragment>
                <div>
                    <hr></hr>
                    <p>Copyright &copy; {currentYear} Bump LLC</p>
                </div>
            </Fragment>
        );
    }
}