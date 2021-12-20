import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, updateAnswers, updateQuestions } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(question) {
    return dispatch => {
        return saveQuestion(question)
          .then(formattedQuestion => {
              dispatch(addQuestion(formattedQuestion));
              dispatch(updateQuestions(formattedQuestion));
          })
    }
}

function answerQuestion({ qid, authedUser, answer }) {
    return {
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer,
    }
}

export function handleAnswer(info) {
    return dispatch => {
        return saveQuestionAnswer(info)
          .then(() => {
              dispatch(answerQuestion(info));
              dispatch(updateAnswers(info));
          })
    }
}