export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(option1, option2, author) {
    return {
        type: ADD_QUESTION,
        
    }
}