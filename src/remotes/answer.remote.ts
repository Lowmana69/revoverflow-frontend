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

//GET/answers/ (confirmed to be on backend) (needs pagination) (might not be useful)
export const getAnswers = async () => {
    const response = await Axios.get<Answer[]>(`/answers`)
    return response.data.map((a) => {
        a.creationDate = new Date(a.creationDate);
        return a;
    });
}

//GET/answers/:id
export const getAnswersById = async (id: number) => {
    const response = await Axios.get<Answer[]>(`/answers/${id}`)
    return response.data.map((a) => {
        a.creationDate = new Date(a.creationDate);
        return a;
    });
}

//GET answers by userId (confirmed to be on backend) (needs pagination)
export const getAnswersByUserId = async (id: number) => {
    const response = await Axios.get<Answer[]>(`/answers/user/${id}`)
    return response.data.map((a) => {
        a.creationDate = new Date(a.creationDate);
        return a;
    });
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


//PUT/answer
export const putAnswer = async (answer: Answer) => {
    const response = await internalAxios.put<Answer>(`/answers`, answer);
    response.data.creationDate = new Date(response.data.creationDate);
    return response.data;
}