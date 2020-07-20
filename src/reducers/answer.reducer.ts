/**
 * @author
 * Evan Liebhauser
 */

import { AnswerState } from '.';
import { AnswerActionPayload, answerActionTypes } from '../actions/answer.actions';
import { Action } from 'redux';

const initialState: AnswerState = {
    collectedAnswers: [],
    storeAnswer: undefined
}

export const answerReducer = (state: AnswerState = initialState,
    action: AnswerActionPayload & Action) => {

    switch(action.type) {
        case answerActionTypes.POST_ANSWER: {
            let answerArray = state.collectedAnswers;
                answerArray = [...answerArray, action.payload.answer]
                    .sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
            return {
                ...state,
                collectedAnswers: answerArray
            }
        }

        case answerActionTypes.ACCEPT_ANSWER: {
            let answer = action.payload.answer;
            let answerArray = state.collectedAnswers;
            let i = answerArray.indexOf(answer);
            answerArray.splice(i, 1);
            answerArray.unshift(answer);
            return {
                ...state,
                collectedAnswers: answerArray
            }
        }
        
        default: {
            return state;
        }
    }
}