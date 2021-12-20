import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswer } from "../actions/questions";

class PollPage extends Component {
    state = {
        answer: '',
    }

    handleChange = e => {
        this.setState({ answer: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault();

        const info = {
            qid: this.props.location.state,
            authedUser: this.props.authedUser,
            answer: this.state.answer,
        };

        console.log(info);

        this.props.dispatch(handleAnswer(info));
    }
    
    render() {
        const id = this.props.location.state;
        const { users, questions, authedUser } = this.props;
        const question = questions[id];
        const user = users[question.author];

        return (
            <div>
                <div className="poll-page">
                    <img src={user.avatarURL} className="avatar" />
                    <div className="poll-options">
                      <div className="poll-text">Would You Rather...</div>
                      <form className="poll-form" onSubmit={this.handleSubmit}>
                        <div>
                            <input type='radio' id="optionOne" value="optionOne" name="options" onChange={this.handleChange} />
                            <label htmlFor='optionOne'>{question.optionOne.text}</label>
                        </div>
                        <div>
                            <input type='radio' id="optionTwo" value="optionTwo" name="options" onChange={this.handleChange} />
                            <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                        </div>
                        <button disabled={this.state.answer === ''} className="submit-btn">Submit answer</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser,
    }
}

export default connect(mapStateToProps)(PollPage);