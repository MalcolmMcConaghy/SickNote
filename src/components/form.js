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
                    <input className="input input--text" type="email" name="senderEmail" placeholder="Your Email" />
                </label>
                <label className="label--text">
                    Sender Name:<br />
                    <input className="input input--text" type="text" name="senderName" placeholder="Full Name" />
                </label>
                <label className="label--text">
                    Subject:<br />
                    <input className="input input--text" type="text" name="senderSubject" placeholder="Email Subject Line" />
                </label>
            </form>
        )
    }
}

export default InputForm;