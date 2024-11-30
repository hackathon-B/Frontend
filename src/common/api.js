import axios from 'axios';
import { BASE_URL } from '../common/constants';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = cookies.get('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * API通信を行うための汎用関数
 *
 * @param {string} method - HTTPメソッド（GET, POST, PUT, DELETEなど）
 * @param {string} endpoint - APIエンドポイントのURL
 * @param {Object|null} [data=null] - 送信するデータ（POSTやPUTリクエストの場合）
 * @returns {Promise<any>} - APIからのレスポンスデータ
 * @throws {Error} - API通信エラーが発生した場合
 */
export async function callApi(method, endpoint, data = null) {
    try {
        const response = await apiClient({
            method: method,
            url: endpoint,
            data: data,
        });
        return response.data;
    } catch (error) {
        console.error('API通信エラー', error);
        throw error;
    }
}


