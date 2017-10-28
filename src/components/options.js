import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedOption: 'message1'};

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    //function to handle changing selected radio button
    handleOptionChange(changeEvent) {
        this.setState({
           selectedOption: changeEvent.target.value 
        });
    }

    render() {
        return (
            <fieldset>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" value="I won't be in today due to sickness" checked={this.state.selectedOption === 'message1'} onChange={this.handleOptionChange} />
                        I won't be in today due to sickness
                    </label>
                </div>
                {/* <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" value="message2" checked={this.state.selectedOption === 'message2'} onChange={this.handleOptionChange} />
                        Second Message
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" value="message3" checked={this.state.selectedOption === 'message3'} onChange={this.handleOptionChange} />
                        Third Message
                    </label>
                </div> */}
            </fieldset>
        )
    }
}

export default Options;