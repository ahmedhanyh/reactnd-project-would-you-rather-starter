import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";

class Homepage extends Component {
    render() {
        const { questionsIds } = this.props;

        return (
            <div>
                {
                    questionsIds.map(id => (
                        <Poll key={id} id={id} />
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionsIds: Object.keys(questions)
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    }
}

export default connect(mapStateToProps)(Homepage);