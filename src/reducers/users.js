import { RECEIVE_USERS, UPDATE_ANSWERS, UPDATE_QUESTIONS } from "../actions/users";

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case UPDATE_QUESTIONS:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }
            }
        case UPDATE_ANSWERS:
            return {
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                  }
                }
              }
        default:
            return state
    }
}