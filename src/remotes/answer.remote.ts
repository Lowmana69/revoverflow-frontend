/**
 * @author
 * Evan Liebhauser
 */

import Axios from 'axios';
import { Answer } from '../models/answer';
import { internalAxios } from './internal.axios';

interface APIAnswer {
    content: string;
}

//GET/answers/ (confirmed to be on backend) (might not be useful)
export const getAnswers = async (size: number, page: number) => {
    const response = await Axios.get<Answer[]>(`/answers?size=${size}&page=${page}`)
    return response.data.map((a) => {
        a.creationDate = new Date(a.creationDate);
        return a;
    });
}

//GET/answers/:id
export const getAnswersByQuestionId = async (id: number, size: number, page: number) => {
    const response = await Axios.get<Answer[]>(`/answers/${id}?size=${size}&page=${page}`)
    return response.data.map((a) => {
        a.creationDate = new Date(a.creationDate);
        return a;
    });
}

//GET answers by userId (confirmed to be on backend)
export const getAnswersByUserId = async (id: number, size: number, page: number) => {
    const response = await Axios.get<Answer[]>(`/answers/user/${id}?size=${size}&page=${page}`)
    return response.data.map((a) => {
        a.creationDate = new Date(a.creationDate);
        return a;
    });
}

//Get an answer by its answer ID (no known endpoint)
export const getAnswerByAnswerId = async (id: number) => {
    const response = await Axios.get<Answer>(`/answers/aid/${id}`)
    return response.data
}


//Get accepted answer by questionId (no known endpoint)
export const getAcceptedAnswerById = async (id: number) => {
    const response = await Axios.get<Answer>(`/answers/accepted/${id}`)
    return response.data
}



//POST/answer (confirmed to be on backend)
export const postAnswer = async (answer: Answer) => {
    const response = await internalAxios.post<Answer>(`/answers`, answer);
    response.data.creationDate = new Date(response.data.creationDate);
    return response.data;
}


//PUT/answer (not expected to be used in final product)
// export const putAnswer = async (answer: Answer) => {
//     const response = await internalAxios.put<Answer>(`/answers`, answer);
//     response.data.creationDate = new Date(response.data.creationDate);
//     return response.data;
// }