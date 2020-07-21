import { internalAxios } from './internal.axios'
import { Question } from '../models/question';
import { user } from '../models/user';
import { Answer } from '../models/answer';


export const getAllQuestions = async (size: number, page: number) => {
    const response = await internalAxios.get<any>(`/questions?size=${size}&page=${page}`);
    return response.data;
}

export const getQuestionsByUserId = async (id: number, size: number, page: number ) => {
    const response = await internalAxios.get<Question[]>(`/questions/user/${id}?size=${size}&page=${page}`);
    return response.data;
}

export const getAnswersByUserId = async (id: number, size: number, page: number) => {
    const response = await internalAxios.get<Question[]>(`/answers/user/${id}?size=${size}&page=${page}`);
    return response.data;
}

export const getUnconfirmedQuestions = async (size: number, page: number) => {
    const response = await internalAxios.get<Question[]>(`questions/status/false?size=${size}&page=${page}`);
    return response.data;
}

export const getQuestionByQuestionId = async (id: number) => {
    const response = await internalAxios.get<Question>(`/questions/questionid/${id}`);
    return response.data;
}

export const getAnswerByAnswerId = async (id: number) => {
    const response = await internalAxios.get<Answer>(`/answers/answerid/${id}`);
    return response.data;
}

export const getAnswersByQuestionId = async (id: number, size: number, page: number) => {
    const response = await internalAxios.get<Question[]>(`/answers/questionid/${id}?size=${size}&page=${page}`);
    return response.data;
}

export const updateQuestionAcceptedAnswerId = async (questionAcceptedAnswerId: any) => {
    const response = await internalAxios.put<Question>(`/questions`, questionAcceptedAnswerId);
    return response;
}

export const updateQuestionStatus = async (questionStatus: any) => {
    const response = await internalAxios.put<Question>(`/questions`, questionStatus);
    return response;
}

export const updateUserPoints = async (userPoints: any) => {
    const response = await internalAxios.put<user>(`/questions`, userPoints);
    return response;
}

