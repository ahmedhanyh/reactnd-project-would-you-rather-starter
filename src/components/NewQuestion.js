import React, { Component } from "react";

class NewQuestion extends Component {
    render() {
        return (
            <div>
                <h3>Pose a new question</h3>
                <form onSubmit={this.handleSubmit} className="new-poll-form">
                    <label for="option-one">Option 1</label>
                    <input id="option-one" name="options" type="text" />
                    <label for="option-two">Option 2</label>
                    <input id="option-two" name="options" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewQuestion;