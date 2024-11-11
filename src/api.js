import axios from 'axios';

export async function callApi( method, url, data = null ) {
    try {
        const response = await axios({
            method:method,
            url:url,
            data:data,
        });
        return response.data
    } catch (error){
        console.error('API通信エラー',error);
        throw error
    }
};

