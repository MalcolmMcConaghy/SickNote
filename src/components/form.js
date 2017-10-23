import React, { Component } from 'react';
import Options from './options.js';

class InputForm extends Component {
    render() {
        return (
            <form className="col-xs-12">
                <label>
                    Destination Email Address:<br />
                    <input className="input input--email" type="email" name="emailSend" placeholder="Email address" />
                </label>
                <Options />
            </form>
        )
    }
}

export default InputForm;