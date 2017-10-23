import React, { Component } from 'react';
import Options from './options.js';

class InputForm extends Component {
    render() {
        return (
            <form className="col-xs-12">
                <label className="label--text">
                    Destination Email Address:<br />
                    <input className="input input--text" type="email" name="emailSend" placeholder="Email address" />
                </label>
                <Options />
                <label className="label--text">
                    Your Email Address:<br />
                    <input className="input input--text" type="email" name="emailFrom" placeholder="Your Email address" />
                </label>
                <label className="label--text">
                    Your Email Password:<br />
                    <input className="input input--text" type="password" name="emailPass" placeholder="Password" />
                </label>
            </form>
        )
    }
}

export default InputForm;