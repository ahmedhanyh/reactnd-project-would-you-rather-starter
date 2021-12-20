import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import LoginPage from "./LoginPage";

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }

    handleChange = e => {
        const option = e.target.id;
        const value = e.target.value;

        this.setState({
            [option]: value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { optionOneText, optionTwoText } = this.state;
        const { authedUser } = this.props;

        this.props.dispatch(handleAddQuestion({ optionOneText, optionTwoText, author: authedUser }));

        this.setState({
            optionOneText: '',
            optionTwoText: '',
            toHome: true,
        })
    }

    render() {
        const { authedUser } = this.props;

        if (this.state.toHome) {
            return <Redirect to="/"/>
        }

        return (
            <div>
            {
                authedUser === null
                ? <LoginPage />
                : (
                    <div>
                        <h3>Pose a new 'Would you rather...' question</h3>
                        <form onSubmit={this.handleSubmit} className="new-poll-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="optionOneText">Option 1</label>
                            <input id="optionOneText" name="options" type="text" value={this.state.optionOneText} onChange={this.handleChange} />
                            <label htmlFor="optionTwoText">Option 2</label>
                            <input id="optionTwoText" name="options" type="text" value={this.state.optionTwoText} onChange={this.handleChange} />
                            <button>Submit</button>
                        </form>
                    </div>
                )
            }
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion);