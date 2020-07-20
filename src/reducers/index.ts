import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { combineReducers } from 'redux';
import { questionReducer } from './question.reducer';
import { answerReducer } from './answer.reducer';


export interface IState {
    questionState: QuestionState;
    answerState: AnswerState;
}

export interface QuestionState {
    collectedQuestions: Question[];
    storeQuestion: Question | undefined;
}

export interface AnswerState {
    collectedAnswers: Answer[];
    storeAnswer: Answer | undefined;
}

export interface AnswerState {
    collectedAnswers: Answer[];

}

export const state = combineReducers ({
    questionState: questionReducer,
    answerState: answerReducer
})
