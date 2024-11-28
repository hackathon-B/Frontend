import axios from 'axios';
import { BASE_URL } from '../common/constants';

/**
 * API通信を行うための汎用関数
 *
 * @param {string} method - HTTPメソッド（GET, POST, PUT, DELETEなど）
 * @param {string} endpoint - APIエンドポイントのURL(呼び出し元でAPI_URLS()使用して定義)
 * @param {Object|null} [data=null] - 送信するデータ（POSTやPUTリクエストの場合）
 * @returns {Promise<any>} - APIからのレスポンスデータ
 * @throws {Error} - API通信エラーが発生した場合
 *
 * @example
 * // 固定エンドポイントを使用する場合
 * callApi('POST', API_URLS.LOGIN, { email, password })
 *   .then(response => { /* レスポンス処理 *\/ })
 *   .catch(error => { /* エラーハンドリング *\/ });
 *
 * @example
 * // 動的エンドポイントを使用する場合
 * const endpoint = API_URLS.GET_CHAT_BY_ID(chatId);
 * callApi('GET', endpoint)
 *   .then(data => { /* チャットデータの処理 *\/ })
 *   .catch(error => { /* エラーハンドリング *\/ });
 */
export async function callApi(method, endpoint, data = null) {
    try {

        const response = await axios({
            method: method,
            url: `${BASE_URL}${endpoint}`,
            data: data,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Cookieを含める場合
        });
        return response.data;
    } catch (error) {
        console.error('API通信エラー', error);
        throw error;
    }
};


