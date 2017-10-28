import React, { Component } from 'react';
import Options from './options.js';
import $ from 'jquery'; 

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailSend: '',
            senderEmail: '',
            senderName: '',
            senderSubject: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        var data = {
            emailSend: this.state.emailSend,
            senderEmail: this.state.senderEmail,
            senderName: this.state.senderName,
            senderSubject: this.state.senderSubject,
            messsage: 'Im sick'
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3001/sendmail',
            data: data,
            success: function(data) {
                alert("Success!");
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <form className="col-12" onSubmit={this.handleSubmit}>
                <label className="label--text">
                    Destination Email Address:<br />
                    <input className="input input--text" type="email" name="emailSend" placeholder="Email address" value={this.state.emailSend} onChange={this.handleOnChange} />
                </label>
                <Options />
                <label className="label--text">
                    Your Email Address:<br />
                    <input className="input input--text" type="email" name="senderEmail" placeholder="Your Email" value={this.state.senderEmail} onChange={this.handleOnChange} />
                </label>
                <label className="label--text">
                    Sender Name:<br />
                    <input className="input input--text" type="text" name="senderName" placeholder="Full Name" value={this.state.senderName} onChange={this.handleOnChange} />
                </label>
                <label className="label--text">
                    Subject:<br />
                    <input className="input input--text" type="text" name="senderSubject" placeholder="Email Subject Line" value={this.state.senderSubject} onChange={this.handleOnChange} />
                </label>
                <button className="btn" type="submit">Submit</button>
            </form>
        )
    }
}

export default InputForm;