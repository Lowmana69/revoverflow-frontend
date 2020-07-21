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
    storeTab: number;
    storePageCount: number;
    storePage: number;
    confirm: boolean;
}

export interface AnswerState {
    collectedAnswers: Answer[];
    storeAnswer: Answer | undefined;
    accepted: boolean;
}

export interface AnswerState {
    collectedAnswers: Answer[];

}

export const state = combineReducers ({
    questionState: questionReducer,
    answerState: answerReducer
})
