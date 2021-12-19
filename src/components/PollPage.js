import React, { Component } from "react";

class PollPage extends Component {
    handleSubmit = e => {
        e.preventDefault();
        
    }
    
    render() {
        return (
            <div>
                <div className="poll-page">
                    <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" className="avatar" />
                    <div className="poll-options">
                      <div className="poll-text">Would You Rather...</div>
                      <form className="poll-form" onSubmit={this.handleSubmit}>
                        <input type='radio' id="option-one" name="options" />
                        <label for='option-one'>have horrible short term memory</label>
                        <input type='radio' id="option-two" name="options" />
                        <label for='option-two'>have horrible short term memory</label>
                        <button className="submit-btn">Submit answer</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollPage;