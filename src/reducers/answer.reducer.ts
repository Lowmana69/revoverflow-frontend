import { AnswerState } from '.';
import { AnswerActionPayload, answerActionTypes } from '../actions/answer.actions';
import { Action } from 'redux';

const initialState: AnswerState = {
    collectedAnswers: JSON.parse((localStorage.getItem('answers')) || '{}'),
    storeAnswer: JSON.parse((localStorage.getItem('selectedAnswer')) || '{}')
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
                default: {
                    return state;
                }
                case answerActionTypes.ACCEPT_ANSWER: {


            }


            }
    }







    // export const answerActionTypes = {
    //     POST_ANSWER: 'POST_ANSWER',
    //     ACCEPT_ANSWER: "ACCEPT_ANSWER"
    // }
    
    // export interface AnswerActionPayload {
    //     payload: {
    //         answer: Answer
    //     }
    // }
    
    // export const postAnswer = (answer: Answer) => (dispatch: Dispatch<AnswerActionPayload & Action>) => {
    //     dispatch({
    //         type: answerActionTypes.POST_ANSWER,
    //         payload: {
    //             answer
    //         }
    //     });
    // }
    
    // export const acceptAnswer = (answer: Answer) => (dispatch: Dispatch<AnswerActionPayload & Action>) => {
    //     dispatch({
    //         type: answerActionTypes.ACCEPT_ANSWER,
    //         payload: {
    //             answer
    //         }
    //     });
    // }
    switch (action.type) {
        case answerActionTypes.POST_ANSWER: {
            let answerArray = state.collectedAnswers;
            answerArray = [...answerArray, action.payload.answer]
                .sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());
            return {
                ...state,
                collectedAnswers: answerArray
            }
        }
        case answerActionTypes.ACCEPT_ANSWER: {
            return {
                ...state,
                storeAnswer: action.payload.answer
            }
        }
        default: {
            return state;
        }
    }
}
