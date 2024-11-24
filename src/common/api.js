import axios from 'axios';
import { BASE_URL, API_URLS } from '../common/constants';

/**
 * API通信を行うための汎用関数
 *
 * @param {string} method - HTTPメソッド（GET, POST, PUT, DELETEなど）
 * @param {string | Function} endpoint - APIエンドポイントのURLまたは関数（動的エンドポイントの場合）
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
        // エンドポイントが関数の場合は実行してURLを取得
        const url = endpoint;

        const response = await axios({
            method: method,
            url: `${BASE_URL}${url}`,
            data: data,
        });
        return response.data;
    } catch (error) {
        console.error('API通信エラー', error);
        throw error;
    }
};


