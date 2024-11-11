import axios from 'axios';
import { BASE_URL } from '../common/constants';

export async function callApi( method, endpoint, data = null ) {
    try {
        const response = await axios({
            method:method,
            url:`${BASE_URL}${endpoint}`,
            data:data,
        });
        return response.data
    } catch (error){
        console.error('API通信エラー',error);
        throw error
    }
};

