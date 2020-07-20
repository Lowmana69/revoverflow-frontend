import Axios from 'axios';
import { Answer } from '../models/answer';

interface APIAnswer {
    content: string;
}

//GET/answers/
export const getAnswers = async (id: number) => {
    const response = await Axios.get<Answer[]>(`/answers`)

    return response;
}

//GET/answers/:id


//POST/answer


//PUT/answer
