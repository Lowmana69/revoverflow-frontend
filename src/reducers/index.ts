import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { combineReducers } from 'redux';
import { questionReducer } from './question.reducer';

export interface IState {
    questionState: QuestionState;
}

export interface QuestionState {
    collectedQuestions: Question[];

}

export interface AnswerState {
    collectedAnswers: Answer[];

}

export const state = combineReducers ({
    questionState: questionReducer
})
