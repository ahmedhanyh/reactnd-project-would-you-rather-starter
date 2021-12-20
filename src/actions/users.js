export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function updateQuestions(question) {
    return {
        type: UPDATE_QUESTIONS,
        question,
    }
}

export function updateAnswers({ qid, authedUser, answer }) {
    return {
        type: UPDATE_ANSWERS,
        qid,
        authedUser,
        answer,
    }
}